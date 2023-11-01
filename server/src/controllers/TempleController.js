const { Temple } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const temples = await Temple.findAll()
            res.send(temples)
        } catch (error) {
            res.status(500).send({
                error: 'The temples information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const temple = await Temple.create(req.body)
            res.send(temple.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create temple incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Temple.update(req.body, {
                where: {
                    id: req.params.templeId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update temple incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const temple = await Temple.findOne({
                where: {
                    id: req.params.templeId
                }
            })

            if (!temple) {
                return res.status(403).send({
                    error: 'The temple information was incorrect'
                })
            }

            await temple.destroy()
            res.send(temple)
        } catch (error) {
            res.status(500).send({
                error: 'The temple information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const temple = await Temple.findByPk(req.params.templeId)
            res.send(temple)
        } catch (error) {
            res.status(500).send({
                error: 'The temple information was incorrect'
            })
        }
    }
}