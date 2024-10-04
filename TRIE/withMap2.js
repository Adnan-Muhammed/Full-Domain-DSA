class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children.has(char)) return false;

      node = node.children.get(char);
    }
    return true;
  }

  delete(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    node.isEndOfWord = false;

    // Remove entire subtree if it becomes empty
    if (node.children.size === 0 && !node.isEndOfWord) {
      return true; // Successfully deleted
    }

    return false; // Couldn't delete (word not found or couldn't remove subtree)
  }
}

let trie = new Trie();

trie.insert("java");
trie.insert("javascript");

trie.insert("python");

// trie.delete("python")
trie.delete("java");
console.log(trie.search("python"));
