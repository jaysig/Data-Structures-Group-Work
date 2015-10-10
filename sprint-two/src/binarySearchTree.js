var BinarySearchTree = function(value){
  this.value = null;
  this.left = null;
  this.right = null;
};
var bst = new BinarySearchTree();

BinarySearchTree.prototype.insert = function(value){
  //No values - top value
  //If one - lower value left - higher value right
  if(!this.value){
    this.value =value;
  }else{
    if(this.values[0]===undefined){
      this.values[0] = value;
    }
  }

};
BinarySearchTree.prototype.contains = function(value){
  /*
  Search through the tree to see if an item is contained
  return _.reduce(this.values,function(wasFound,treeItem){
    if (wasFound){
    return true;
  } else{
  return treeItem === value;
}
//},false)
*/
};
BinarySearchTree.prototype.depthFirstLog = function(callback){
  /*
  var newTree = [];
  newTree = _.map(this.values,function(treeItem){
    callback(item);
})
return newTree;
  */
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
