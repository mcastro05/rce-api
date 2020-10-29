const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})