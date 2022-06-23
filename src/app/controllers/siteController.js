class SiteController {
    home(req, res){
        res.render('index', {
            title: 'Trang chủ',
        })
    }
    
    intro(req, res){
        res.send('your introduce');
    }

    contact(req, res) {
        res.send('My contact')
    }
}

module.exports = new SiteController