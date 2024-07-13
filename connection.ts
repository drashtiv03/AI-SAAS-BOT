import {connect, disconnect} from 'mongoose'//connect to mongoDB database using Mongoose library
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }
    catch(error)
    {
        console.log(error);
        throw new Error("Cannot connect to Database MongoDB");
    }
}
async function disconnectFromDatabase()
{
    try{
        await disconnect();
    }
    catch(error)
    {
        console.log(error);
        throw new Error("Cannot disconnect from Database MongoDB");
    }
}
export {connectToDatabase,disconnectFromDatabase};