var Queue = function(){
  var obj = {};
  obj.counter = 0; //number I move up and down
  obj.length = 0;
  obj.firstKey = 0;
  obj.storage= {}; //need a object to hold the values
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  //counter as the key & value
  this.storage[this.counter] = value;
  this.length++;
  this.counter++;
};
queueMethods.dequeue = function(){
  if(this.length){
    this.length--;
  }
  var result = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  return result;
  //return something
};
queueMethods.size = function(){
  return this.length;
};


/*

var Queue = function(){
  obj._start = 0;
  obj._end = 0;
  obj._storage= {}; //need a object to hold the values
  _.extend(obj, queueMethods);

  return obj;
};
var queueMethods ={};

queueMethods.enqueue = function(value){
  this._storage[this._counter++]=value;
};

queueMethods.dequeue = function(){
  result = this._storage[this._start];
  if(this.size()){
    delete this._storage[this._start];
    this._start++;
  }
  return result;
};

queueMethods.size = function(){
  return this._end-this._start;
};

*/
