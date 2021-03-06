var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    }
    //look at implementing else
    //with one element head and tail point to the same node
    //draw linked list
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      if(!list.head.next){
        list.head.next = list.tail;
      }
  };

  list.removeHead = function(){
    if(list.head){
      var result = list.head.value;
      list.head = list.tail;
      return result;
    }
  };

  list.contains = function(target){
    if(list.head.value === target || list.tail.value === target){
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
