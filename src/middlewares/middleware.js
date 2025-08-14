exports.middlewareGlobal = (req, res, next) => {
    res.locals.globalVariable = 'Só para testar';
    next();
}

exports.checkCSRFerror = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    };
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}