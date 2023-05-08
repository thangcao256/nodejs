import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);

    router.get('/details/user/:userId', homeController.getDetailPage)

    router.post('/create-new-user', homeController.createNewUser)

    router.post('/delete-user', homeController.deleteUser);

    router.get('/edit-user/:id', homeController.getEditPage);

    router.post('/update-user', homeController.postUpdateUser)

    // return app.use('/web/v1/', router)
    return app.use('/', router)

}

export default initWebRoute;
// module.exports = initWebRoute;