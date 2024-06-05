import { app } from "./app.js";
import connectDb from "./db.js";

await connectDb()
.then(
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server is listening on port : " , 3000);
    })
)
.catch(
    (err)=>{
        console.log(err);
    }
)