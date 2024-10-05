class Git {
  constructor(name) {
    this.name = name;
    this.branches = [];
    const master = new Branch("master", null);
    this.branches.push(master); // Store master branch
    this.head = master;
    this.lastCommitId = -1;
  }

  commit(message) {
    const newCommit = new Commit(
      ++this.lastCommitId,
      message,
      this.head.commit
    );
    this.head.commit = newCommit;
    return newCommit;
  }

  log() {
    let history = [];
    let currentCommit = this.head.commit;
    while (currentCommit !== null) {
      history.push(currentCommit);
      currentCommit = currentCommit.parent;
    }
    return history.reverse();
  }

  checkout(branchName) {
    const branch = this.branches.find((b) => b.name === branchName);
    if (branch) {
      console.log(`Switched to existing branch: ${branchName}`);
      this.head = branch;
    } else {
      // If branch was not found, create a new one
      const newBranch = new Branch(branchName, this.head.commit);
      this.branches.push(newBranch);
      this.head = newBranch;
      console.log(`Switched to new branch: ${branchName}`);
    }
    return this;
  }
}

class Commit {
  constructor(id, message, parent) {
    this.id = id;
    this.message = message;
    this.parent = parent;
  }
}

class Branch {
  constructor(name, commit) {
    this.name = name;
    this.commit = commit;
  }
}

// Maps the array of commits into a string of commit ids.
const historyToIdMapper = (history) =>
  history.map((commit) => commit.id).join("-");

// Test code
console.log("3. Branches test");

const repo = new Git("test");
repo.commit("Initial commit");
repo.commit("Change 1");

console.assert(
  historyToIdMapper(repo.log()) === "1-0",
  "Log does not match expected value after initial commits"
);

repo.checkout("testing");
repo.commit("Change 3");

console.assert(
  historyToIdMapper(repo.log()) === "2-1-0",
  "Log does not match expected value after commits on 'testing' branch"
);

repo.checkout("master");
console.assert(
  historyToIdMapper(repo.log()) === "1-0",
  "Log does not match expected value after switching back to 'master'"
);

repo.commit("Change 3");
console.assert(
  historyToIdMapper(repo.log()) === "3-1-0",
  "Log does not match expected value after additional commit on 'master'"
);
