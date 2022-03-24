class Tree {
    constructor() {
      this.root = null;
    }
    
    traverseBF(fn){
        const arr = [this.root];
        while (arr.length){
            const node = arr.shift(); //obtiene el primer elemento y lo elimina
            
            arr.push(...node.children);
            fn(node);
        }
    }
    
  }
  
  // You shouldn't need to modify the Node class
  class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  
    remove(data) {
      this.children = this.children.filter((node) => {
        return node.data !== data;
      });
    }
  }
  