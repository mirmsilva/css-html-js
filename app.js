function Graph(){
  this.nodes = [];
  this.edges = []
}

Graph.prototype.addNodes = function(n){
  this.nodes.push(n);
};

Graph.prototype.addNodes = function(p){
  this.edges.push(p);
};

var graphObj = new Graph();

console.log(graphObj);