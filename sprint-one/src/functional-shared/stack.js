var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.counter = 0; //number I move up and down
  obj.storage= {}; //need a object to hold the values
  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;

  return obj;
};

var stackMethods = {};
stackMethods.push = function(value){
  //counter as the key & value
  this.storage[this.counter] = value;
  this.counter++;
};
stackMethods.pop = function(){
  if(this.counter){
    this.counter--;
  }
  var result = this.storage[this.counter];
  delete this.storage[this.counter];
  return result;
  //return something
};
stackMethods.size = function(){
  return this.counter;
};
