var button=document.getElementById("counter");
 var counter=0;

button.onclick=function()
{
   var request = new XMLHttpRequest();
   
   request.onreadystatechange=function()
   {
       if(request.readyState==XMLHttpRequest.DONE)
       {
           if(request.status==200)
           {
               var counter=request.responseText;
                var span= document.getElementById('count');
                  span.innerHTML=counter.toString();
         }
               
           }
       };
       
       request.open('GET','http://divu1666.imad.hasura-app.io/counter',true);
       request.send(null);
       
       
   };
   
   var inputName=document.getElementById('name');
   var name=inputName.value;
   var submit=documnet.getElementById('button');
   submit.onclick=function()
   {
      var names=['name1','name2','name3'];
      var list='';
      for(var i=0;i<names.length;i++)
      {
          list='<li>'+names[i]+'</li>';
      }
      var ul=document.getElementById('namelist');
      ul.innerHTML=list;
      
   };