function countLetters(string){
 var result = {};
 var stringSplit = string.split(" ").join("").split("");
 var count = 0;

 for (var i = 0; i < stringSplit.length; i++){
   for (var x = 0; x < stringSplit.length; x++){
     if (stringSplit[i] === stringSplit[x]){
       count += 1;
     }
   result[stringSplit[i]] = count;
   }
   count = 0;
 }
return result;
};


console.log(countLetters("lighthouse in the house"))