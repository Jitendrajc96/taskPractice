var middleNode = function(head) {
   let forwardNode = head,backwardNode = head;
    while(forwardNode !== null && forwardNode.next !== null){
        backwardNode = backwardNode.next;
        forwardNode = forwardNode.next.next;
    }
    return backwardNode;
} 
