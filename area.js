    var a=5,b=6,c=7;
    var p = (a+b+c)/2;
    var inner = p*(p-a)*(p-b)*(p-c);
    var a=Math.sqrt(inner);
    document.getElementById("demo").innerHTML=a;
