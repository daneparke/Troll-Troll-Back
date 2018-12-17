const db = require('./database-connection')

module.exports = {
    getAllUnits() {
        return db.select().from('units')
    },
    getUnitById(id) {
        return db('units').where('id', id)
    }
}