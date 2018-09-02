const experss = require('express');
const app = experss();
const proudctRoutes = require('./api/routes/products')
app.use('/products', proudctRoutes);



module.exports = app;