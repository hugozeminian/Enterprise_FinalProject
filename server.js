const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/page', express.static(path.join(__dirname, 'page')));

let tasks = []; // Store tasks

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page', 'message.html'));
});



 
app.listen(3000, () => console.log('Server running on http://localhost:3000'));

//to stop: docker stop (NAME)
//to find the name: docker ps
//to run: docker run -p 3000:3000(KEY)

//to run using folder name: docker run -d -p 3000:3000 --rm --name  message-app -v /app/message message-node:volume1
//to build: docker build .