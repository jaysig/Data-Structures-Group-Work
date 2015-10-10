var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //Array that has 8 spots

};

HashTable.prototype.insert = function(k, v) {
    var i = getIndexBelowMaxForKey(k, this._limit);
    var tuple = [k, v];
    if (this._storage[i] === undefined) {
      this._storage[i] = [1];
      //works
    }
    if (Array.isArray(this._storage[i])) {
        for (var a = 0; a < this._storage[i].length; a++) {

//           console.log(k);
          if(this._storage[i][a] === 1){
            this._storage[i][a] = []; //Zero Index create an array
            this._storage[i][a].push(tuple); //first run
          } else if (this._storage[i][a][0][0] === k) {
            this._storage[i][a][0][1] = v;
          } else {
//             this._storage[i].push(tuple);
            this._storage[i][a].push(tuple);
          }
        }
      }
  //k is a string
  //at I pass a key and a value
  // if(typeof this._storage[i] !== 'object'){
  //   this._storage[i] = {};
  // }
  // this._storage[i][k] = v;
  //this._storage[i].push([k,v]);

// roughly works
//
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var a = 0; a < this._storage[i].length; a++) {
    if (Array.isArray(this._storage[i][a][0])) {
      for (var b = 0; b < this._storage[i][a].length; b++) {
        console.log(this._storage[i][a].length);
        if (this._storage[i][a][b][0] === k) {
          return this._storage[i][a][b][1];
        }
      }
    } else if (this._storage[i][a][0] === k) {
      return this._storage[i][a][1];
    } else {
      return null;
    }
  }
};
  //k is a string
  // for(var w = 0;w<this._storage[i].length;w++){
  //   if(this._storage[i][w][0]===k){
  //     return this._storage[i][w][1];
  //   }
  // }
  // console.log(this._storage[i]);
  // return this._storage[i][k];

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var a = 0; a<this._storage[i].length;a++){
    if(this._storage[i][a][0][0]===k){
      this._storage[i][a][0] = null;
    }
  }

  // this._storage[i][k] = null;
  //Is this how I should delete it?
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


 //store multiple values
