var button=document.getElementById('counter');
var counter=0;
button.click=function()
{
   
   
   //render the variable
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
}