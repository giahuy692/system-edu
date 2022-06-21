class ShopController {
    quan(req, res){
        res.send('Hello world');
    }
    
    ao(req, res){
        res.send('your introduce');
    }

    contact(req, res) {
        res.send('My contact')
    }
}

module.exports = new ShopController