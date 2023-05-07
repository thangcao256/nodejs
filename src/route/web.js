import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/about', (req, res) => {
        res.send(`I'm Minh Thang!`)
    })

    return app.use('/web/v1/', router)

}

export default initWebRoute;
// module.exports = initWebRoute;