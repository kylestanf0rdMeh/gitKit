class Git{
    constructor(name){
        this.name = name;
        this.head = null;
        this.lastCommitId = -1;
        // in actual git, 40-hexdigit number is used. We will use integers for simplicity
    }

    commit(id, message){
        var newCommit = new Commit(++this.lastCommitId, message, this.head);
        this.head = newCommit;
        return newCommit;
    }

    log(){
        var history = [];
        let currentCommit = this.head;
        while(currentCommit !== null){
            history.push(currentCommit);
            currentCommit = currentCommit.parent;
        }
        return history.reverse();
    }
}


class Commit{
    constructor(id, message){
        this.id = id;
        this.message = message;
        this.parent = parent;
    }
}


var repo = new Git("my-repo")
const commit1 = repo.commit(1, "Initial commit")
console.log(commit1);