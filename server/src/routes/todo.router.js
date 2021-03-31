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


    router.route('/add').post((req, res) => {

        //return res.status(400).send('Please enter all fields');

        let mark = new Mark(req.body);

        mark.save()
            .then(mark => {
                //res.status(200).json({ 'todo': 'todo added successfully' });
                res.status(200).send('adding new todo failed');
            })
            .catch(err => {
                res.status(400).send('adding new todo failed');
            });
    });

    return router;
}



export default {
    route,
    routePrefix: '/todo'
    //routePrefix: `/${config.version}/auth`
}