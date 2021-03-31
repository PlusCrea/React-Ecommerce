import express from 'express';
import config from '../config';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import Role from '../role';


const route = () => {
    const router = new express.Router();

    router.route('/login').post((req, res) => {
        const { email, password } = req.body;

        // Simple validation
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        User.findOne({ email: email }).then((user) => {
            if (!user) {
                res.send({
                    status: false,
                    message: 'Böyle bir email adresi sistemde kayıtlı değil.'
                })
            } else {
                if (user.password === crypto.createHmac('sha256', config.passSecret).update(password).digest('hex')) {
                    const token = jwt.sign({ userId: user._id }, config.jwtSecret);
                    if (!token) throw Error('Couldnt sign the token');

                    User.update({ email: email }, {
                        $set: {
                            lastLogin: new Date()
                        }
                    }).then(() => { });

                    res.send({
                        status: true,
                        token: token,
                        userId: user._id,
                        role: user.role
                    })
                } else {
                    res.send({
                        status: false,
                        message: 'Hatalı şifre girdiniz.'
                    })
                }

            }
        })

    });

    router.route('/signup').post((req, res) => {
        const { firstname, lastname, email, password } = req.body;
        console.log('Router', req.body);

        //return res.status(400).send('Please enter all fields');

        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: crypto.createHmac('sha256', config.passSecret).update(password).digest('hex')
        });

        newUser.save().then(
            (data) => {
                res.send({ status: true, user: data });
            },
            (err) => {
                res.send({ status: false, error: err });
            }
        )
    });

    return router;
}



export default {
    route,
    routePrefix: '/Auth'
    //routePrefix: `/${config.version}/auth`
}