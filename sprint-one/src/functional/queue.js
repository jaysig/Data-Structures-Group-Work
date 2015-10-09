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

    /* result = storage[lowestKey];
    lowestKey++;
    //expected undefined to equal b
    //expected c to equal b
    delete storage[lowestKey];
    return result;*/
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
