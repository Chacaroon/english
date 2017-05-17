/**
 * Created by Nikita on 10.05.2017.
 */

const app = require('express').Router();
const fs = require('fs');
const path = require('path');
const Busboy = require('busboy');
const User = require('../../models').User;

app.post('/uploadFile', function (req, res, next) {
    let busboy = new Busboy({headers: req.headers});

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        let savePath = 'public/img/avatar/';
        let saveTo = path.join(savePath, filename);

        /*if (req.user.avatar !== imgName) {
            fs.readdir(savePath, function (err, files) {
                if (err) next(err);

                let f;
                for (f in files) {
                    if (files[f].split('.', 1)[0] === req.user.username) {
                        fs.unlinkSync(path.join(savePath, files[f]));
                        break
                    }
                }
            });
        }*/
        
        fs.unlink(savePath + req.user.avatar, function (err) {
            if (err) next(err);
        });

        User.findOneAndUpdate(
            {username: req.user.username}
            , {avatar: filename}
            , {new: true}
            , function (err, doc) {
                if (err) next(err);
            }
        );

        file.pipe(fs.createWriteStream(saveTo));
    });

    busboy.on('finish', function() {
        res.status(200);
        res.redirect('/' + req.user.username)
    });

    return req.pipe(busboy);
});

module.exports = app;