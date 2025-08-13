function large(){
    var r=arguments[0];
    for(let i=0; i<arguments.length;i++){
      if(r<arguments[i]){
        r=arguments[i]
    }
    }
    return r;
}
console.log(large(2,4,5,6));