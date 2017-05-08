/**
 * Created by Nikita on 07.05.2017.
 */

module.exports = function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
};