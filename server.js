var express = require('express');
var morgan = require('morgan');
var path = require('path');

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

app.get('/article-one',function(req,res){
    
  res.send(createTemplate(articleOne));
    

});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
