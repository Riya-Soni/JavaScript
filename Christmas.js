var today=new Date();//to day date
var cmas=new Date(today.getFullYear(), 11, 25);//fetching cmas date
if (today.getMonth()==11 && today.getDate()>25) //if the date is more thar 25 dec
{
    cmas.setFullYear(cmas.getFullYear()+1);// get next year
}  
var one_day=1000*60*60*24;//milisec in one day
var time_left = (cmas.getTime()-today.getTime())/(one_day)
console.log(Math.ceil(time_left)+" days left until Christmas!");
//ceil method to use the smallest integer