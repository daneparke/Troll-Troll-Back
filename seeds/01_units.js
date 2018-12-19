exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {
          type: 'Knight',
          health: 13,
          mana: 0,
          attack: 4,
          defense: 3,
          attackRange: 1,
          moveRange: 4,
          coolDown: 2,
          price: 20,
          image: 'http://ssouls.wdfiles.com/local--files/troops:overview/Paladin.png'
        },
        {
          type: 'Mage',
          health: 7,
          mana: 3,
          attack: 6,
          defense: 0,
          attackRange: 4,
          moveRange: 1,
          coolDown: 2,
          price: 20,
          image: 'https://cdn.worldofwargraphs.com/img/human_mage.png'
        },
        {
          type: 'Ranger',
          health: 9,
          mana: 0,
          attack: 3,
          defense: 1,
          attackRange: 6,
          moveRange: 5,
          coolDown: 2,
          price: 20,
          image: 'https://vignette.wikia.nocookie.net/dragonsdogma/images/6/6e/MAGICK_ARCHER.png/revision/latest?cb=20120921031950'
        },
        {
          type: 'Cleric',
          health: 8,
          mana: 3,
          attack: 1,
          defense: 0,
          attackRange: 3,
          moveRange: 4,
          coolDown: 3,
          price: 20,
          image: 'https://ya-webdesign.com/images/anime-wizard-png-4.png'
        }
      ]);
    });
};
