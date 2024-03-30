import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/routes";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world. This server is dedicated for the note-forever app making with react native.");
});

app.use('/api/v1/', router);


export default app;