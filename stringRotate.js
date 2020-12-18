var  str1 = "JavaScriptTrainingModule";
var arr = str1.split("");
var len = arr.length;
var temp ="";
for (index = arr.length-1; index >= 0 ; index--) {
    temp= arr[index] + temp;
}
console.log(temp);