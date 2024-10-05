# Simple Git Simulation Tool

## Overview

This repository contains a simple Git simulation tool implemented in JavaScript. It is designed as an educational exercise to help users understand the basic concepts and operations of Git, the widely-used version control system. The tool simulates the creation of commits, logging commit history, and basic branch management without the complexity of actual Git commands.

## Features

- **Commit Creation**: Users can create new commits with a message. Each commit is assigned a unique sequential ID and linked to its predecessor, forming a simple commit history.
- **Commit History (Log)**: The tool can display the history of commits in reverse chronological order, mimicking the `git log` command.
- **Branch Management**: Users can create new branches and switch between them, similar to `git branch` and `git checkout`. The master branch is created by default.
- **Branch Isolation**: Commits made on one branch do not affect the history of other branches, allowing for isolated development streams.

## How It Works

### Classes

The tool defines three main classes:

- `Git`: Represents a repository with attributes for the repository name, a list of branches, a reference to the current branch (`head`), and the ID of the last commit.
- `Commit`: Represents a commit with an ID, a message, and a reference to the parent commit.
- `Branch`: Represents a branch with a name and a reference to the last commit on that branch.

### Operations

- **Commit**: When a commit is made, it is added to the current branch (`head`). The commit is linked to the previous commit on that branch.
- **Log**: The log function traverses the commit history from the current branch's latest commit backward to the initial commit, collecting the commits into an array.
- **Checkout**: The checkout function switches the current branch (`head`) to the specified branch. If the branch does not exist, it is created from the current commit.

### Usage

1. **Creating a Repository**: Instantiate a `Git` object with a repository name.
2. **Making Commits**: Call the `commit` method on the `Git` object with a commit message.
3. **Viewing History**: Call the `log` method to retrieve the commit history.
4. **Branching and Switching**: Use the `checkout` method to switch to an existing branch or create a new one.

### Example

```
javascript
const repo = new Git("my-repo");
repo.commit("Initial commit");
repo.commit("Second commit");
repo.checkout("new-feature");
repo.commit("Start new feature");
repo.checkout("master");
console.log(repo.log()); // Shows commits on the master branch
```

## Testing

The repository includes a simple testing mechanism using `console.assert` to verify that the commit history matches expected outcomes after various operations.

## Conclusion

This tool serves as a hands-on way to understand the fundamental concepts of Git without delving into the complexities of a full-fledged version control system. It is intended for educational purposes and does not interact with actual Git repositories.
