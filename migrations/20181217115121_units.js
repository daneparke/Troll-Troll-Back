exports.up = function (knex, Promise) {
    return knex.schema.createTable('units', (unit) => {
        unit.increments('id')
        unit.string('type')
        unit.integer('health')
        unit.integer('mana')
        unit.integer('attack')
        unit.integer('defense')
        unit.integer('attackRange')
        unit.integer('moveRange')
        unit.integer('coolDown')
        unit.integer('price')
        unit.string('image', [400])
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('units')
};
