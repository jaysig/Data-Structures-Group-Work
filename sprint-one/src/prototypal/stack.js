var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.counter=0;
  obj.storage={};
  return obj;
};

var stackMethods = {}; //Acts as prototype
stackMethods.push = function(value){
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
};
stackMethods.size = function(){
  return this.counter++;
};
