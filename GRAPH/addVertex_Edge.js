class Graph {
  constructor() {
    this.adjacencyList ={};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex,edgeVertex){
    if(!this.adjacencyList[vertex]){
        this.addVertex(vertex)
    }
    if(!this.adjacencyList[edgeVertex]){
        this.addVertex(edgeVertex)
    }
    this.adjacencyList[vertex].push(edgeVertex)
    // this.adjacencyList[edgeVertex].push(vertex)  //   uncommend when directional
  }

  display(){
    for (const vertex in this.adjacencyList) {
        console.log(`${vertex} : ${this.adjacencyList[vertex]}`);
        
    }
  }
}

let graph = new Graph()

graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(2,5)
graph.addEdge(3,4)
graph.addEdge(4,5)

graph.display()