// isLoggedIn
const isLoggedIn = (req, res, next) => {
    if(!req.session.currentUser) {
        return res.redirect("/")
    }

    next()
}


//logout

const isLoggedOut = (req, res, next) => {

    if(req.session.currentUser){
        return res.redirect("/")
    }

    next()

}



module.exports = {
    isLoggedIn,
    isLoggedOut
}