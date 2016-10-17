var userModel = model.load('User');
module.exports = {
    get_index : function(req, res) {
        var arr;
        userModel.list(req, res, function(err, result) {
            res.send(result);
        });
    }
}    
