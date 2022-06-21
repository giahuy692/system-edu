const siteRouter = require('./site')

function route(app){

    // app.use('/shop', shop);
    app.use('/', siteRouter);
}

module.exports = route;

