exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('username')
        user.string('password')
        user.integer('currency')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users')
}