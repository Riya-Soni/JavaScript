var d = new Date();
var year = 2019//d.getFullYear();
var leap = false;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                leap = true;
            else
                leap = false;
        }
        else
            leap = true;
    }
    else
        leap = false;
    if (leap===false) {
        console.log("Not a Leap year");
    } else {
        console.log("It is a Leap year");
    }