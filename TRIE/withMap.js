class TrieNode {
    constructor() {
      this.children = new Map();  // Store children using a Map
      this.isEndOfWord = false;   // Marks the end of a valid word
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(); // Initialize root node
    }
  
    // Insert a word into the Trie




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



  
    // Search for a word in the Trie
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children.has(char)) {
            return false
        };
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }



  
    // Check if any words in the Trie start with a given prefix
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children.has(char)) return false;
        node = node.children.get(char);
      }
      return true;
    }
  
    // Collect all words stored in the Trie
    getAllWords() {
      const result = [];
      
      const dfs = (node, currentWord) => {
        if (node.isEndOfWord) result.push(currentWord);
        for (let [char, childNode] of node.children) {
          dfs(childNode, currentWord + char);
        }
      };
      
      dfs(this.root, '');  // Start DFS from root
      return result;
    }
  }
  
  // Example usage
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("bat");
  trie.insert("ball");
  trie.insert("batman");
  
  console.log(trie.search("apple"));    // true
  console.log(trie.search("app"));      // true
  console.log(trie.search("bat"));      // true
  console.log(trie.search("bats"));     // false
  console.log(trie.startsWith("app"));  // true
  console.log(trie.startsWith("bat"));  // true
  console.log(trie.startsWith("cat"));  // false
  console.log(trie.getAllWords());      // ["app", "apple", "ball", "bat", "batman"]
  