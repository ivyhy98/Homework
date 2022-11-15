const express = require('express');
const fs = require('fs');
const app = express();

const port = 3000;
const adjectives = ['Cool','Funny', 'Beautiful', 'Good', 'Happy','Unbreakable', 'Amazing', 'Smart', 'Intelligent']
app.engine('html',(filePath, option, callback)=>{
    fs.readFile(filePath,(err,content)=>{
        if(err) return callback(err);
        const rendered = content.toString()
            .replace('#word#',option.word);
        return callback(null, rendered);
    })
})
app.set('views','./views');
app.set('view engine', 'html');
app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.get('/about/:word',(req,res)=>{
    res.render('about',{
        word: `${req.params.word}`
    })
})

app.get('/affirmations/:adjectivesIndex', (req, res)=>{
    res.send(`<h1> You are ${adjectives[req.params.adjectivesIndex]} </h1>`)
})

app.get("/:word", (req, res) => {
  res.render("index", {
    word: `${req.params.word}`,
  });
});



app.listen(port, function(){
    console.log('listening on port ', port);
})