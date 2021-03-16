const express=require('express')
const app=express();
app.use((req,res,next)=>{

    console.log("THIS IS MY FIRST MIDDLEWARE")
    return next()
    console.log("this is my second middleware")
})
app.use((req,res,next)=>{
console.log("THIS IS MY SECOND PASSWORD")
return next()
})

const verifyPassword=(req,res,next)=>{
    const {password}=req.query;
    if(password==='chick')
    {
        next();
    }
    res.send("YOU NEED A PASSWORD")
}
app.get("/",(req,res)=>{

    console.log("reuqest page is this shit")
    res.send('HOME PAGE')
})

app.get('/dogs',(req,res)=>{
    console.log("woof woof")
    res.send("woof woof")
})
app.get('/secret',verifyPassword,(req,res)=>{

    res.send('MY SECRET IS:Sometimes I wear headphones in public so I dont have to talk to anyone')
})
app.listen(3000,(req,res)=>{
    console.log("APP HAS STARTED")
})