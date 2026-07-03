const express = require('express');
const app = express();
const port = 3000;
const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});