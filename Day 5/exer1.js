function price(a,b){
    var rs;
      rs=a-a*(b/100);
    console.log('$'+' '+ rs.toFixed(1) );
    return '$'+ rs;
}
console.log(price(140,20));