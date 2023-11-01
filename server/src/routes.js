const TempleController = require('./controllers/TempleController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all temple
    app.get('/temples', TempleController.index)

    // create temple
    app.post('/temple', TempleController.create)

    // edit temple, suspend, active
    app.put('/temple/:templeId', TempleController.put)

    // delete temple
    app.delete('/temple/:templeId', TempleController.remove)

    // get temple by id
    app.get('/temple/:templeId', TempleController.show)}