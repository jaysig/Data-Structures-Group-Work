var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.firstKey = 0;
  this.counter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
  this.length++;
};
Queue.prototype.dequeue = function(){
  if(this.length){
    this.length--;
  }
  var result = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  return result;
};
Queue.prototype.size = function(){
  return this.length;
};

/*

var Queue = function(){

  this._start = 0;
  this._end = 0;
  this._storage= {}; //need a this to hold the values
};

Queue.prototype.enqueue = function(value){
  this._storage[this._counter++]=value;
};

Queue.prototype.dequeue = function(){
  result = this._storage[this._start];
  if(this.size()){
    delete this._storage[this._start];
    this._start++;
  }
  return result;
};

Queue.prototype.size = function(){
  return this._end-this._start;
};

*/
