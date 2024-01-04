const express = require('express')
const cors = require('cors');
const http = require('http');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const server = http.createServer(app);
server.listen(3000, () => console.log(`Server is now online!`));
