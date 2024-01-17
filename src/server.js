const express = require('express')
const cors = require('cors');
const http = require('http');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const server = http.createServer(app);
const port = 8080;
module.exports = port;
server.listen(port, () => console.log(`Server is now online!`));
