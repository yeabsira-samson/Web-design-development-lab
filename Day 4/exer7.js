function vow(x) {
    var num = 0;
    var i = 0;
    do {
        var ch = x[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            num++;
        }
        i++;
    } while (i < x.length);
    return num;
}

console.log(vow('cat')); 
