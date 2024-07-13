import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeners for incoming requests
const PORT=process.env.PORT || 5000;
connectToDatabase().then(()=>{
  app.listen(PORT,()=>
    console.log("Server opened and connected to database!.") //tells  the application to listen on port 5000 for incoming requests).catch((err)=>(console.log(err)))
  );
}).catch((err)=>console.log(err));
       

                                                                                              