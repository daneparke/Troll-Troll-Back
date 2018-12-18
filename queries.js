const db = require('./database-connection')

module.exports = {
    getAllUnits() {
        return db.select().from('units')
    },
    getUnitById(id) {
        return db('units').where('id', id)
    },
    getAllUsers() {
        return db.select().from('users')
    },
    getUserById(id) {
        return db('users').where('id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*')
    },
    deleteUser(id) {
        return db('users').where('id', id).delete()
    }

}