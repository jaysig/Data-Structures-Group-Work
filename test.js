[object Object] {
  addChild: function (value){
  var obj= Tree(value);
  this.children.push(obj);
},
  children: [[object Object] {
  addChild: function (value){
  var obj= Tree(value);
  this.children.push(obj);
},
  children: [],
  contains: function (target){
  return _.reduce(this.children,function(wasFound,item){
    if(wasFound){
      return true;
    } else {
      window.runnerWindow.proxyConsole.log(item);
      return item.value === target;
    }
  },false);
},
  value: 7
}],
  contains: function (target){
  return _.reduce(this.children,function(wasFound,item){
    if(wasFound){
      return true;
    } else {
      window.runnerWindow.proxyConsole.log(item);
      return item.value === target;
    }
  },false);
},
  value: 5
}
