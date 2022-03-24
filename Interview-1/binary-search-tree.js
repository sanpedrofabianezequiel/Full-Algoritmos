// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {//Recursivo para recorrer el arbol
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);//Si existe el nodo le asigno el valor
        }else if(data <this.data){//creo el nodo
            this.left =  new Node(data);
        }else if(data > this.data && this.right){
            this.right.insert(data);
        }else if(data > this.data){
            this.right = new Node(data);
        }
    }
    
    contains(data){
        if(this.data === data){
            return this;//Si la data que busco es la actual, devuelvo el nodo actual
        }
        
        if(this.data < data && this.right){//si la informacio que recibo es mayor, tengo que a la derecha
            return this.right.contains(data);
        }else if(this.data > data && this.left){// si la informacion que recibi es menor, tengoq ue ir a la izquieda
            return this.left.contains(data);
        }
        return null;
    }
}