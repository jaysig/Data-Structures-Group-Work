var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.counter = 0;
  obj.length = 0;
  obj.storage = {};
  obj.firstKey = 0;
  return obj;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.counter]=value;
  this.counter++;
  this.length++;
};
queueMethods.dequeue = function(){
  if(this.length){
    this.length--;
  }
  var result = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  return result;
};
queueMethods.size = function(){
  return this.length;
};
