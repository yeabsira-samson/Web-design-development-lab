function hi(a){
    return a;
}
function createCounter(a,callback){
   var counter=0;
   var num=3
   while(num>0){
      callback(a);
      counter++;
      num--;
   }
   return counter;
}
console.log(createCounter('hi',hi));