// function([100,-40,500,-124,0,21,7])
// [ -124, -40, 0, 7, 21, 100, 500 ]

function bubbleSort(arr) {
    
    for(let i = 0;i<arr.length;i++){
        for(let j = 0; j <(arr.length - i -1);j++  ){
            if(arr[j] > arr[j+1]){ //si el numero actual es mayor al que viene, lo SWITCHEO
                const lesser = arr[j+1];
                arr[j+1]=arr[j];//El siguiente tendra el valor actual
                arr[j] = lesser; //el anterior o el currente tendra el valor siguiente ya que es  menor
            }
        }
    }

    return arr;
}
