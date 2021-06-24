var session = require('./session')

exports.get = function (request, response, webconfig){
    console.log ("logout")
    session.clear(response)
    response.redirect (webconfig.root)
}