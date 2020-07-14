var a = 5;
var b = a;
console.log(a+b);
var x = { h:7 };
var y = x;
y.h = y.h^2;
console.log(y.h,x.h);