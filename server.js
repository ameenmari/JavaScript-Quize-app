
const express=require('express')
const app=express();

app.set('view-engine','ejs')
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{

    //res.render('index');

    res.send('Hello there')
})

app.listen('3000');