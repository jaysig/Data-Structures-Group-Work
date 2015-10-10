var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value){
  //If one - lower value left - higher value right
      if(this.left === null && value < this.value){
        this.left = new BinarySearchTree(value);
      } else if(this.right === null && value > this.value){
        this.right = new BinarySearchTree(value);
      } else if(value < this.value) {
        // console.log(this.left);
        this.left.insert(value);
      }else {
        this.right.insert(value);
      }
};
BinarySearchTree.prototype.contains = function(value){
  var tree = this;
  var values = [];
  var reducer = function(obj){
    for(var key in obj){
      if(typeof obj[key] === 'number'){
        values.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null){
          reducer(obj[key]);
      }
    }
  };
  reducer(tree);
  return _.reduce(values,function(wasFound,treeItem){
    if (wasFound){
    return true;
  } else {
    return treeItem === value;
  }
},false);

};
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var tree = this;
  var values = [];
  var reducer = function(obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        values.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        reducer(obj[key]);
      }
    }
  };
  reducer(tree);
  var newTree = [];
  newTree = _.map(values, function(treeItem) {
    callback(treeItem);
  });
  return newTree;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
