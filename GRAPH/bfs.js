
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex, edgeVertex, directional = true) {
    if (!this.adjacencyList[vertex]) {
      this.addVertex(vertex);
    }
    if (!this.adjacencyList[edgeVertex]) {
      this.addVertex(edgeVertex);
    }

    this.adjacencyList[vertex].push(edgeVertex);
    if (!directional) {
      this.adjacencyList[edgeVertex].push(vertex);
    }
  }

  display() {
    for (let vertices in this.adjacencyList) {
      console.log(`${vertices}: ${this.adjacencyList[vertices]}`);
    }
  }

  bfs(start) {
    
    if(!this.adjacencyList || !start ) return []
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    let result = [];

    while (queue.length > 0) {
      let vertex = queue.shift();
      result.push(vertex);

      for (let edge of this.adjacencyList[vertex]) {
        if (!visited.has(edge)) {
          visited.add(edge);
          queue.push(edge);
        }
      }
    }
    return result;
  }


  
  dfs(start){
    let stack = [start];
    let visited = new Set();
    visited.add(start)

    let result = [];

    while(stack.length>0){


      const vertex = stack.pop()
      result.push(vertex)


      for(let edges of this.adjacencyList[vertex]){
        if(!visited.has(edges)){
          visited.add(edges);
          stack.push(edges)
        }
      }
    }
    return result
  }

  
}

const graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("D", "C", "E");
graph.display();


console.log(graph.bfs("D"));
console.log(graph.dfs("A"));
