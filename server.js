const app = require("./index")
const connect = require('./configs/db')
app.listen(3000,async()=>{
    try{
        await connect();
        console.log("Listening port 3000");
    }catch(err){
        console.log(err.message);
    }
})