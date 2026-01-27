import mongoose from "mongoose";


const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("databse connected successfully")
    })

    let mongodbURI = process.env.MONGODB_URI;
    const projectName = "AI-Resume-Builder";

    if((!mongodbURI)){
      throw new Error("MONFODB_URI environment variable not set")
    }

    if(mongodbURI.endsWith('/')){
      mongodbURI = mongodbURI.slice(0,-1)
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`)

  } catch (error) {
     console.log("Error connecting to MongoDb: ",error);
  }
}

export default connectDb;