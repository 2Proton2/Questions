let Str1 = 'ABCDGH';
let Str2 = 'AEDFHR';

let modifiedStr = "";

for(let i=0; i<Str1.length; i++){
    let currentIndex = Str1[i];
    if(Str2.includes(currentIndex)){
        modifiedStr += currentIndex;
    }
}
console.log(modifiedStr)