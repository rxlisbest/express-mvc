var userModel = model.load('User');
module.exports = {
    // 数据库demo
    get_index : function(req, res) {
        var arr;
        userModel.list(req, res, function(err, result) {
            res.send(result);
        });
    },
    // 视图demo
    get_view : function(req, res) {
        res.render('test', {}); 
    },
}    
