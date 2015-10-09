var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = [];  // fix me - Was null originally
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var obj= Tree(value);
  this.children.push(obj);
};

treeMethods.contains = function(target){
  var present = false;
  for (var i =0;i<this.children.length;i++){
      if(this.children[i].value === target){
        present = true;
      } else {
        for(var x =0;x<this.children[i].children.length;x++){
          if(this.children[i].children[x].value === target){
            present = true;
          }
        }
      }
  }
  return present;
};
  /*
  return _.reduce(this.children,function(wasFound,item){
    if(wasFound){
      return true;
    }
    //else if(item.children){
    //   return item.children.value === target;
    // }
    else {
      return item.value === target;
    }
  },false);
  */

  // each(this.children,function(child){
  //
  // })
  // for(var i =0;i<this.children.length;i++){
  //   if(this.children[i].value === target){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }



/*
 * Complexity: What is the time complexity of the above functions?
 */
