import express from 'express';

import Mark from '../models/Mark';


const route = () => {
    const router = new express.Router();

    router.route('/').get((req, res) => {
        Mark.find(function (err, marks) {
            if (err) {
                console.log(err);
            } else {
                res.json(marks);
            }
        });
    });

    //Id li kaydı buluyor....
    router.route('/:id').get(function (req, res) {
        let id = req.params.id;
        Mark.findById(id, function (err, mark) {
            res.json(mark);
        });
    });

    router.route('/update/:id').post(function (req, res) {
        Mark.findById(req.params.id, function (err, mark) {
            if (!mark)
                res.status(404).send("data is not found");
            else
                mark.name = req.body.name;

            mark.save().then(mark => {
                res.json('Mark updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
    });

    //Delete

    router.route('/delete/:id').delete((req, res, next) => {
        Mark.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

    router.route('/add').post((req, res) => {

        let mark = new Mark(req.body);

        mark.save()
            .then(mark => {
                res.status(200).json({ 'todo': 'todo added successfully' });
            })
            .catch(err => {
                res.status(400).send('adding new todo failed');
            });
    });

    return router;
}



export default {
    route,
    routePrefix: '/mark'
    //routePrefix: `/${config.version}/auth`
}