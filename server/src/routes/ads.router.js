import express from 'express';

import Ads from '../models/ads';
import multer from 'multer';
import path from 'path';

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }

});

// Init Upload
/*
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).array('myImage');
*/
//var upload = multer({ storage: storage }).array('userPhoto', 2);

//var upload = multer({ storage: storage });
var upload = multer({ storage: storage }).array('myImage');
/*
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).array("myImage", 2);
*/


// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const route = () => {
    const router = new express.Router();


    router.route('/').get((req, res) => {


        Ads.find(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.json(data);
            }
        }).populate("mark").populate("model");
    });



    //router.post("/multer", upload.array('myImage', 12), function (req, res) {
    /*
      router.post("/multer", upload.array('myImage'), function (req, res) {
          console.log("GEldi");
      });
  */

    router.post('/multer', function (req, res) {

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            console.log(req.files[0].filename);

            return res.status(200).send(req.files)

        })

    });

    router.route('/upload').post((req, res) => {

        upload(req, res, (err) => {
            //        upload(req, res, function (err) {
            //console.log(req);
            //const { filename } = req.file;

            console.log(req.file);
            if (err) {
                return res.send(200).end();
            }
            res.send("File is uploaded");


        });
    });

    /*
    upload(req, res, (err) => {
        if (err) {
            res.status(200).json({ 'Ads': err });
            /*
             res.render('index', {
                 msg: err
             });
             *//*
} else {
if(req.file == undefined) {
res.render('index', {
msg: 'Error: No File Selected!'
});
} else {
res.render('index', {
msg: 'File Uploaded!',
file: `uploads/${req.file.filename}`
});
}
}
});
*/


    //id li kaydı buluyor....
    router.route('/:id').get(function (req, res) {
        let id = req.params.id;
        Ads.findById(id, function (err, data) {
            res.json(data);
        });
    });

    /*
        router.route('/update/:id').post(function (req, res) {
            Ads.findById(req.params.id, function (err, data) {
                if (!data)
                    res.status(404).send("data is not found");
                else {
                    data.title = req.body.title;
                    //model.mark = req.body.mark;
                }
                data.save().then(data => {
                    res.json('Model updated!');
                })
                    .catch(err => {
                        res.status(400).send("Update not possible");
                    });
            });
        });
     
        */
    router.route('/update/:id').post((req, res, next) => {
        Ads.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
                console.log(error)
            } else {
                res.json(data)
                //console.log('Student updated successfully !')
            }
        })
    })

    //Delete

    router.route('/delete/:id').delete((req, res, next) => {
        Ads.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

    router.route('/add').post((req, img, res) => {

        let data = new Ads(req.body);

        for (var x = 0; x < data.images.length; x++) {
            console.log(data.images[x]);

            /*
                        file.mv(`${__dirname}/client/src/img/${file.name}`, err => {
                            if (err) {
                                console.error(err);
                                return res.status(500).send(err);
                            }
                        }
              */
        }
        console.log(img);

        return;
        data.save()
            .then(data => {
                res.status(200).json({ 'Ads': 'Ads added successfully' });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    });

    return router;
}



export default {
    route,
    routePrefix: '/Ads'
    //routePrefix: `/${config.version}/auth`
}