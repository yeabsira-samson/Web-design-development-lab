function scopDemo(){
    var x =10;
    let y=20;
    if(true){
        let y=30;
        console.log(x);
        console.log(y);
       console.log(y);
    }
    console.log(x);
    console.log(y);
    console.log(y);
}
console.log(scopDemo());