// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }

//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = [];
//     }
//   }

//   addEdge(vertex, edgeVertex, directional = true) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = [];
//     }
//     if (!this.adjacencyList[edgeVertex]) {
//       this.adjacencyList[edgeVertex] = [];
//     }
//     this.adjacencyList[vertex].push(edgeVertex);
//     if (!directional) {
//       this.adjacencyList[edgeVertex].push(vertex);
//     }
//   }
//   display() {
//     for (const vertices in this.adjacencyList) {
//       console.log(`${vertices} --> ${this.adjacencyList[vertices]}`);
//     }
//   }
// }

// const graph = new Graph();

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("A", "D");
// graph.addEdge("B", "D");
// graph.addEdge("D", "C");
// graph.addEdge("D", "E");

// graph.display();






class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex, edgeVertex, unidirectional = true) {
    if (!this.adjacencyList[vertex]) {
      this.addVertex(vertex);
    }
    if (!this.adjacencyList[edgeVertex]) {
      this.addVertex(edgeVertex);
    }
    this.adjacencyList[vertex].push(edgeVertex)
    if(!unidirectional){
      this.adjacencyList[edgeVertex].push(vertex)
    }
  }

  display(){
    for(let vertices in this.adjacencyList){
      console.log(`${vertices}: ${this.adjacencyList[vertices]}`);
      
    }
  }


  dfs(start){
    let stack = [start];
    //let queue = [start]
    let visited = new Set();
    visited.add(start)

    let result = [];

    while(stack.length>0){
      // while(queue.length>0){


      const vertex = stack.pop()
      // const vertex = queue.shift()
      result.push(vertex)


      for(let edges of this.adjacencyList[vertex]){
        if(!visited.has(edges)){
          visited.add(edges);
          stack.push(edges)
          // queue.push(edges)
        }
      }
    }
    return result
  }


}

let graph = new Graph()

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("A","D")
graph.addEdge("B","D")
graph.addEdge("D","C")
graph.addEdge("D","E")

graph.display()

let dfs =  graph.dfs("A")

console.log( dfs);
