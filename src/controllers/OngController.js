const generateUniqueId = require('../utils/uuid')
const connection = require('../database/connection')

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*')

    return res.json(ongs)
  },

  async create(req, res) {
    const { name, email, whatsapp, city } = req.body

    const id = generateUniqueId()

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city
    })

    return res.json({ id })
  }
}
