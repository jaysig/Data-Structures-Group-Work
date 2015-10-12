left: [object Object] {
   contains: function (value){
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
},
   depthFirstLog: function (callback){
   /*
   var newTree = [];
   newTree = _.map(this.values,function(treeItem){
     callback(item);
})
return newTree;
   */
},
   insert: function (value){
   //If one - lower value left - higher value right
     if(value===7){
       window.runnerWindow.proxyConsole.log(binarySearchTree);
     }
     if(this.left === null && value < this.value){
       this.left = new BinarySearchTree(value);
     } else if(this.right === null && value > this.value){
       window.runnerWindow.proxyConsole.log('hello');
       this.right = value;
     } else if(typeof this.left === 'number') {
       var holder = this.left;
       this.left = new BinarySearchTree(holder);
       this.left.insert(value);
     }else {
       var holder = this.right;
       this.right = new BinarySearchTree(holder);
     }
},
   left: null,
   right: null,
   value: 2
 },
 right: [object Object] {
   contains: function (value){
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
},
   depthFirstLog: function (callback){
   /*
   var newTree = [];
   newTree = _.map(this.values,function(treeItem){
     callback(item);
})
return newTree;
   */
},
   insert: function (value){
   //If one - lower value left - higher value right
     if(value===7){
       window.runnerWindow.proxyConsole.log(binarySearchTree);
     }
     if(this.left === null && value < this.value){
       this.left = new BinarySearchTree(value);
     } else if(this.right === null && value > this.value){
       window.runnerWindow.proxyConsole.log('hello');
       this.right = value;
     } else if(typeof this.left === 'number') {
       var holder = this.left;
       this.left = new BinarySearchTree(holder);
       this.left.insert(value);
     }else {
       var holder = this.right;
       this.right = new BinarySearchTree(holder);
     }
},
   left: null,
   right: null,
   value: null
 },
 value: 5
}
