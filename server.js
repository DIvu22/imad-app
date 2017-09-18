var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto = require('crypto');

var config={
    user:'divu1666',
    database:'divu1666',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articleOne=
{
    title :'Article One|Divya Gupta',
    heading :'Article One',
    date :'23 August,2017',
    content :` <p>
            This is my first wwbpage.I am very happy to make it
        </p>
        <p>
            This is my first wwbpage.I am very happy to make it
        </p>
        <p>
            This is my first wwbpage.I am very happy to make it
        </p>
    
    `
    
};
function createTemplate(data)
{ 
    title=data.title;
heading=data.heading;
date=data.date;
content=data.content;
    

var template
=
`
   <html>
    <head>
    <title>
        Article One|Divya Gupta
    </title>
    <meta name ="viewport" content="width=device-width ,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
 
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            Article one
        </h3>
        <div>
            23 August 2017
        </div>
        <p>
            This is my first wwbpage.I am very happy to make it
        </p>
        <p>
            This is my first wwbpage.I am very happy to make it
        </p>
        <p>
            This is my first wwbpage.I am very happy to make it
        </p>
        </div>
    </body>
</html> 
    
  `;
  return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;

app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/article-one',function(req,res){
    
  res.send(createTemplate(articleOne));
    

});
 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function hash(input,salt)
{
  var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');  
  return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res)
{
    var hashedString=hash(req.params.input,'this is some random string');
    res.send(hashedString);
});



 
 var poll=new Pool(config);
 app.get('/test-db',function(req,res){
   //select
   pool.query('SELECT * FROM  test',function(err,result)
   {
       if (err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
          res.send(JSON.stringify(result)); 
       }
   });
   //show results
 });

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
