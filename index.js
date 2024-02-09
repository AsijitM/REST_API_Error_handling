const express = require('express');
const authRouter = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/api', authRouter);
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
