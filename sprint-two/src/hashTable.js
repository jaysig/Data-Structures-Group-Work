var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //Array that has 8 spots

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //k is a string
  //at I pass a key and a value
  if(typeof this._storage[i] !== 'object'){
    this._storage[i] = {};
  }
  this._storage[i][k] = v;
  //this._storage[i].push([k,v]);

// roughly works
//
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //k is a string
  // for(var w = 0;w<this._storage[i].length;w++){
  //   if(this._storage[i][w][0]===k){
  //     return this._storage[i][w][1];
  //   }
  // }
  console.log(this._storage[i]);
  return this._storage[i][k];
  /*

  if(Array.isArray(this._storage[i])){
    for(var q = 0;q<this._storage[i].length;q++){
      if(this._storage[i][q]===k){
        return this._storage[i][q];
      }
    }
  } else {
    return this._storage[i];
  }
  return this._storage[i];
  */

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = null;
  //Is this how I should delete it?
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


 //Insert
 //if k stays the same. i changes. Change v
 /*
 if(!this._storage[i]){
   this._storage[i] = v;
 }
 */

 // else k is different. i is the same.
 /*
  else {
   if(typeof this._storage[i] === 'number'){
     var z = this._storage[i];
     this._storage[i] = [];
     this._storage[i].push(z);
   } else{
     console.log(this._storage[i]);
     this._storage[i].push(v);
   }
 }
 */

 //store multiple values
