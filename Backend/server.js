const express = require('express');
const cors = require('cors');

const app = express();
 app.use(cors());
 app.use(express.json());

 app.get('/', (req, res) => {
    res.send("AI Text Summarizer Backend is running");
 });

 

 app.post('/summarize', (req, res) => {
    const { text } = req.body;
    
    console.log("Received text for summarization:", text);

    res.json({ summary: "This is a test summary." });
 });
 app.listen(5000, () => {
    console.log("Server is running on port 5000");
 });