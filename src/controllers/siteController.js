class SiteController {
    home(req, res){
        res.send('Hello world');
    }
}

module.exports = new SiteController