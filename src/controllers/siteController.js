class SiteController {
    home(req, res){
        res.send('Hello world');
    }
    introdu(req, res){
        res.send('Hello  introdu');
    }
}

module.exports = new SiteController