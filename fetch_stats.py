import os
import json
import requests

TOKEN = os.environ.get("GH_TOKEN")
USERNAME = "aarushb"

def fetch_github_stats():
    if not TOKEN:
        print("Error: GH_TOKEN environment variable is not set. Please set it before running.")
        return

    headers = {"Authorization": f"Bearer {TOKEN}"}
    
    # 1. Fetch User Repo Counts (REST API is easiest for this)
    user_response = requests.get('https://api.github.com/user', headers=headers)
    user_data = user_response.json()
    
    public_repos_count = user_data.get('public_repos', 0)
    private_repos_count = user_data.get('total_private_repos', 0)

    # 2. Fetch Contributions & Top Repos (GraphQL API)
    query = """
    {
      user(login: "%s") {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalRepositoriesWithContributedCommits
          restrictedContributionsCount
          commitContributionsByRepository(maxRepositories: 4) {
            repository {
              name
              isPrivate
            }
            contributions {
              totalCount
            }
          }
        }
      }
    }
    """ % USERNAME

    response = requests.post('https://api.github.com/graphql', json={'query': query}, headers=headers)
    data = response.json()
    
    if "message" in data:
        print(f"API Error: {data['message']}")
        return
        
    if "errors" in data:
        print(f"GraphQL Error: {data['errors']}")
        return

    try:
        contribs = data["data"]["user"]["contributionsCollection"]
    except KeyError as e:
        print(f"Unexpected JSON structure. Missing key: {e}")
        return
    
    # Calculate True Total Contributions (matches your GitHub Profile)
    # restrictedContributionsCount represents private activity
    total_contributions = (
        contribs["totalCommitContributions"] + 
        contribs["totalPullRequestContributions"] + 
        contribs["totalIssueContributions"] +
        contribs.get("restrictedContributionsCount", 0)
    )

    # Process the top contributed repositories securely
    top_repos_list = []
    for repo_node in contribs.get("commitContributionsByRepository", []):
        repo_info = repo_node["repository"]
        count = repo_node["contributions"]["totalCount"]
        
        if repo_info["isPrivate"]:
            top_repos_list.append({"name": "Private Repository", "commits": count})
        else:
            top_repos_list.append({"name": repo_info["name"], "commits": count})

    # 3. Fetch Top Languages (REST API)
    repos_response = requests.get(f'https://api.github.com/users/{USERNAME}/repos?per_page=100', headers=headers)
    repos = repos_response.json()
    
    lang_counts = {}
    total_repos_with_lang = 0
    
    # Ensure repos is a list to avoid breaking if the API hits a limit
    if isinstance(repos, list):
        for repo in repos:
            if repo.get("language"):
                lang = repo["language"]
                lang_counts[lang] = lang_counts.get(lang, 0) + 1
                total_repos_with_lang += 1

    top_langs = sorted(lang_counts.items(), key=lambda x: x[1], reverse=True)[:3]
    
    if total_repos_with_lang > 0:
        languages_formatted = [
            {
                "name": lang[0], 
                "percentage": round((lang[1] / total_repos_with_lang) * 100, 1)
            } 
            for lang in top_langs
        ]
    else:
        languages_formatted = []

    # 4. Compile the ultimate nerdy JSON structure
    stats = {
        "totalContributions": total_contributions,
        "commits": contribs["totalCommitContributions"],
        "prs": contribs["totalPullRequestContributions"],
        "issues": contribs["totalIssueContributions"],
        "contributedTo": contribs["totalRepositoriesWithContributedCommits"],
        "ownedRepos": {
            "public": public_repos_count,
            "private": private_repos_count
        },
        "topRepositories": top_repos_list,
        "languages": languages_formatted
    }

    with open("github-stats.json", "w") as f:
        json.dump(stats, f, indent=2)
        
    print("Successfully updated github-stats.json with advanced stats!")

if __name__ == "__main__":
    fetch_github_stats()