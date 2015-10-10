var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(this._storage === undefined){
    this._storage= {};
  }
   this._storage[item] = "here";
};

setPrototype.contains = function(item){
  for(var item in this._storage){
    if(this._storage[item]==="here"){
      return true;
    } else{
      return false;
    }
  }
};

setPrototype.remove = function(item){
  for(var item in this._storage){
    if(this._storage[item]==="here"){
      this._storage[item] = "gone";
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
