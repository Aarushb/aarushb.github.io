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
    
    query = """
    {
      user(login: "%s") {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalRepositoriesWithContributedCommits
        }
      }
    }
    """ % USERNAME

    response = requests.post('https://api.github.com/graphql', json={'query': query}, headers=headers)
    data = response.json()
    
    # Handle auth errors from the REST wrapper
    if "message" in data:
        print(f"API Error: {data['message']}")
        return
        
    # Handle query errors from GraphQL
    if "errors" in data:
        print(f"GraphQL Error: {data['errors']}")
        return

    # Safely parse the nested GraphQL data
    try:
        contribs = data["data"]["user"]["contributionsCollection"]
    except KeyError as e:
        print(f"Unexpected JSON structure. Missing key: {e}")
        return
    
    repos_response = requests.get(f'https://api.github.com/users/{USERNAME}/repos?per_page=100')
    repos = repos_response.json()
    
    lang_counts = {}
    total_repos_with_lang = 0
    
    for repo in repos:
        if repo.get("language"):
            lang = repo["language"]
            lang_counts[lang] = lang_counts.get(lang, 0) + 1
            total_repos_with_lang += 1

    top_langs = sorted(lang_counts.items(), key=lambda x: x[1], reverse=True)[:3]
    
    # Avoid division by zero if no repositories have languages detected
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

    stats = {
        "commits": contribs["totalCommitContributions"],
        "prs": contribs["totalPullRequestContributions"],
        "issues": contribs["totalIssueContributions"],
        "contributedTo": contribs["totalRepositoriesWithContributedCommits"],
        "languages": languages_formatted
    }

    with open("github-stats.json", "w") as f:
        json.dump(stats, f, indent=2)
        
    print("Successfully updated github-stats.json")

if __name__ == "__main__":
    fetch_github_stats()