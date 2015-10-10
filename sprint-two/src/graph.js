
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = {};
  this.edges={};
  this.iterating = false;
};

var graph = new Graph();
// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return _.reduce(this.storage,function(wasFound,item){
    if(wasFound){
      return true;
    }
    return item === node;
  },false);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.edges[fromNode] === toNode){
    return true;
  } else {
    return false;
  }
  //this.storage[fromNode].edge
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){

  this.edges[fromNode] = toNode;
  if(this.iterating===false){
    this.edges[toNode] = fromNode;
  }
  console.log(this.edges);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode];
  for (var edge in this.edges){
    if(this.edges[edge]=== fromNode){
      delete this.edges[edge];
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
    /*
  _.each(this.storage,function(node){
    //look at edge cases
    //try for in loop worst case
    cb(node);
  });
  */
  this.iterating = true;
  for(var node in this.storage){
    cb(node);
    console.log(this.edges);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
