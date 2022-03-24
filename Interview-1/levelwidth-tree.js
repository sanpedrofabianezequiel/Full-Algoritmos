// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root,'s'];
    const counter = [0]; //Retorno un array de niveles
    
    while(arr.length > 1){
        const node =  arr.shift();
        
        if(node === 's'){
            counter.push(0);//Ingreso un nuevo valor y lo seteo en cero para cada nivel
            arr.push('s');//Traslado al final del array la bandera
        }else{
            counter[counter.length - 1] ++;
            arr.push(...node.children);
        }
    }
    
    return counter;
 }
 
 // You shouldn't need to modify this class
 class Node {
   constructor(data) {
     this.data = data;
     this.children = [];
   }
 
   add(data) {
     this.children.push(new Node(data));
   }
 }
 