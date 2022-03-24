// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
    const obj ={};
    let foundMax=0;
    let found;
    for(const x of str){
        if(!obj[x]){
            obj[x] = 1;
        }else{
            obj[x] ++;
        }
    }
    for(const x in obj){
        if(obj[x] > foundMax ){
            foundMax = obj[x];
            found = x
        }
    }
    return found;
}
