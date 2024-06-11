# Github PR Count Badge

This project can make badge to show one's merged pr in a repo or org.

## Count PR in a Repository

```http request
GET https://github-pr-count-badge.vercel.app/badge/pr-repo?owner=$owner&repo=$repo&contributor=$contributor&color=$color
```

- owner: repository owner
- repo: repository name
- contributor: whose merged PR is counted
- color: optional, color for text

Example:

```text
https://github-pr-count-badge.vercel.app/badge/pr-repo?owner=Bluemangoo&repo=github-pr-count-badge&contributor=Bluemangoo
```

## Count PR in an Organization

```http request
GET https://github-pr-count-badge.vercel.app/badge/pr-org?org=$org&contributor=$contributor&color=$color
```

- org: organization owner
- contributor: whose merged PR is counted
- color: optional, color for text

Example:

```text
https://github-pr-count-badge.vercel.app/badge/pr-org?org=MCSManager&contributor=Bluemangoo
```