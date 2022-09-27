class Solution {
  divide(N,head){
    //code
    let even = null, odd = null, eHead = null, oHead = null;
    while(head){
        if(head.data%2 === 0){
            if(even === null){
                even = head;
                eHead = head;
            }else{
                eHead.next = head;
                eHead = eHead.next;
            }
        }else{
            if(odd === null){
                odd = head;
                oHead = head;
            }else{
                oHead.next = head;
                oHead = oHead.next;
            }
        }
        head = head.next;
    }
    if(eHead) eHead.next = odd;
    if(oHead) oHead.next = null;
    if(even) return even;
    return odd;
  }
}
