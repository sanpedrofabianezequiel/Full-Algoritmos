//reverseInt(15)=51;
//reverseInt(-15)= -51;
function reverseInt(n) {
    const result =  n.toString().split('').reverse().join('');
    return parseInt(result) * Math.sign(n);
}