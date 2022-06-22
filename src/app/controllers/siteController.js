class SiteController {
    home(req, res){
        res.send('Hello world');
    }
    
    intro(req, res){
        res.send('your introduce');
    }

    contact(req, res) {
        res.send('My contact')
    }
}

module.exports = new SiteController