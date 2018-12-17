exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {
          type: 'knight',
          health: 13,
          mana: 0,
          attack: 4,
          defense: 3,
          atkRange: 1,
          mvRange: 4,
          CD: 2,
          img: 'blah'
        },
        {
          type: 'mage',
          health: 7,
          mana: 3,
          attack: 6,
          defense: 0,
          atkRange: 4,
          mvRange: 1,
          CD: 2,
          img: 'blah'
        },
        {
          type: 'ranger',
          health: 9,
          mana: 0,
          attack: 3,
          defense: 1,
          atkRange: 6,
          mvRange: 5,
          CD: 2,
          img: 'blah'
        },
        {
          type: 'cleric',
          health: 8,
          mana: 3,
          attack: 1,
          defense: 0,
          atkRange: 3,
          mvRange: 4,
          CD: 3,
          img: 'blah'
        }
      ]);
    });
};
