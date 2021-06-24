var session = require('./session')

function render(response, webconfig, username , errorMessage){
    response.render('login',{
        root : webconfig,
        logged : false,
        username : username,
        errorMessage : errorMessage
    })
}
exports.get = function (request, response , webconfig, model){
    if (session.logged(request)){
        response.redirect(webconfig.root)
    }
    else {
        render(response, webconfig, '',false)
    }
}
exports.post = function (request, response, webconfig, model){
    var query = request.body
    console.log (query)
    model.authenticate(query.username, query.password, function(success){
        if (success){
            session.setLogged(response)
            response.redirect(webconfig.root)
        }else {
            render(response, webconfig, query.username, 'wrong Login information')

        }
    })
}