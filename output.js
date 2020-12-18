//q6 What will be the output of the code below?
var Y = 1;
if (function F(){})
{
y += Typeof F;//unexpected identifier
</span>
}
console.log(y);


/* q11 What will be the output of the following code?
var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);//unexpected identifier


q10 What will be the output of the following code?
var X = { Foo : 1}; 
var Output = (function() 
{ 
delete X.foo; 
return X.foo; 
} 
)(); 
console.log(output);//output not define

q9 What will be the output of the following code?
var Output = (function(x)
{
Delete X;//unexpected identifier
return X;
}
)(0);
console.log(output);
*/
