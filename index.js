const express = require("express");
const cors      = require('cors')
const app     = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('gello fello')
})

const users = [
    {id:1,name:"jamal",},
    {id:2,name:"ramal",},
    {id:3,name:"damal",},
    {id:4,name:"tamal",},
    {id:5,name:"kamal",}
];

const fruits = [
    {name:"mangos"},
    {name:"Bannana"},
    {name:"Jackfruit"},
    {name:"Orange"},
    {name:"Pinaple"}
];

const mangos = [
    {id:0,name:"fazli",price:'500'},
    {id:1,name:"jamun",price:'400'},
    {id:2,name:"tmain",price:'700'},
    {id:3,name:"langra",price:'100'},
];
app.get('/users',(req,res)=>{
    res.send(users)
});

app.get('/users/:id',(req,res)=>{
    const userID = req.params.id ;
    res.send(users[userID]) ;
});

app.get('/fruits',(req,res)=>{
    if (req.query.search) {
        const searchRes = mangos.filter(mango => mango.name.toLocaleLowerCase().includes(req.query.search))
        res.send(searchRes)
    }else{
        res.send(mangos)
    }
});


app.post('/fruits',(req,res)=>{
    const newUser = req.body ; 
    newUser.id = mangos.length;
    mangos.push(newUser);
    res.json(newUser)
})




app.listen(5000,()=>{
    console.log('Project Started')
})