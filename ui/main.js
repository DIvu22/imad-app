var button=document.getElementById("counter");

button.click=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState == XMLHttpRequest.DONE)
        {
          if(request.status == 200)
          {
             var counter= request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
          }
        }
        
    };
   
   
   //render the variable
request.open('GET','http://divu1666.imad.hasura-app.io/counter',true);
request.send(null);
   
    
};