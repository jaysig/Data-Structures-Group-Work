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


/*

var Queue = function(){
  var obj = Object.create(queueMethods);

  obj._start = 0;
  obj._end = 0;
  obj._storage= {}; //need a object to hold the values


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
