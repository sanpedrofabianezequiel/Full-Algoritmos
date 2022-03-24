// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let  chunk = [];
    for(let i of array){
        //Obtengo el ultimo conjunto de elementos [ [...values], [value] ]
        let last =  chunk[chunk.length - 1];
        //Si no existe el ultimo elemento o esta comenzando o si es igual al tamaño creo un nuevo CONJUNTO de elementos
        if(!last || last.length === size ){
            chunk.push([i]);//agrego un nuevo conjunto de elementos
        }else{
            //Sino agrego al conjunto de elementos existente un valor
            last.push(i)
        }
    }
    return chunk;
}

function chunk2(array, size) {
    const chunked = [];
    let index = 0;
  
    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
  
    return chunked;
}
  