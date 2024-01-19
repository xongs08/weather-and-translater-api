const express = require('express')
const cors = require('cors');
const http = require('http');
const router = require('./Routes/router');

const app = express();

app.use(cors());
app.use('/api', router);

const server = http.createServer(app);
export const port = 8080;
server.listen(port, () => console.log(`Server is now online!`));
