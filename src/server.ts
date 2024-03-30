


// console.log('This is testing console.');

import mongoose from "mongoose";
import app from "./app";
const port : number = 5000;

async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb+srv://sheltonTool:QahqYIycdvGupmXb@cluster0.qffvse5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });

    console.log("Connected to database with mongoose");
  } catch (err) {
    console.log(err);
  }
}

bootstrap();

