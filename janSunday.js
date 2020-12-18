var d = new Date(2014,00,0);

var day = d.getDay();
for ( year = 2014; year <= 2050; year++) {
    var d = new Date(year,00,1);
    if(d.getDay()===0){
        console.log(d.getFullYear());
    }
}
