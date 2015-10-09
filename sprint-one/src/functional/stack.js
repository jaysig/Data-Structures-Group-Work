var Stack = function(){
  var someInstance = {}, counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    //add one thing to the stack
    storage[counter]=value;
    counter += 1;
  };

  someInstance.pop = function(){
    //decrease one thing
    if(counter){
      counter--;
    }
    var result = storage[counter];
    delete storage[counter]; //Need to clear the data
    return result;
  };

  someInstance.size = function(){
    //return the size
    return counter;
  };

  return someInstance;
};
