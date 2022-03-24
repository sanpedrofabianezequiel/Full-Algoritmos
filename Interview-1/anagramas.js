// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA,stringB){
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString (param){
    return param.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}


/*function anagrams(stringA, stringB) {
    const a = converToObject(stringA);
    const b =  converToObject(stringB);
    
    if(Object.keys(a).length !== Object.keys(b).length) {return false}
    
    for(let x in a){
        if(a[x] !== b[x]){ return false}
    }
    return true;
}

function converToObject(param){
    let result = {};
    
    for(let x of param.replace(/[^\w]/g,'').toLowerCase()){
        result[x] = result[x]+ 1 || 1 ;
    }
    
    return result;
}*/ 
    