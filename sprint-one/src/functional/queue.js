var Queue = function(){
  var someInstance = {}, counter = 0, lowestKey = 0, length=0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter]=value;
    counter++;
    length++;
  };

  someInstance.dequeue = function(){
    if(length){
    length--;
    }
    result = storage[lowestKey];
    delete storage[lowestKey];
    lowestKey++;
    return result;

    };

  someInstance.size = function(){
    return length;
    };

    return someInstance;
    /*
    var storage ={}, start = 0, end = 0;

    someInstance.enqueue = function(value){
      storage[counter++]=value;
    };

    someInstance.dequeue = function(){
      result = storage[start];
      if(someInstance.size()){
        delete storage[start];
        start++;
      }
      return result;
    };

    someInstance.size = function(){
      return end-start;
    };
    return someInstance;

    return result;*/

};
