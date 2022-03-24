// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
function fromLast(list, n) {
    let slow =  list.getFirst();
    let fast =  list.getFirst();
    
    for(let i = 0; i <n; i++){
        fast =  fast.next;
    }//Posiciono el puntero 3 lugares por delante o N numeros
    
    while(fast.next){//Sigo iterand estando 3 posiciones adelante hasta que llegue al final
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}