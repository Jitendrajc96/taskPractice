class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        //your code here
      //slow -> backward node and fast -> forward node
         let slow = head, fast = head;  
        while(fast.next!==null && fast.next.next!==null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow===fast){
                return true;
            }
        }
        return false;
    }
    
}
