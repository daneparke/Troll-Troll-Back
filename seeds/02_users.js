exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: "dparkee",
          password: "password",
          currency: 1000,
        },
        {
          username: "Sir Heng",
          password: "password",
          currency: 1000,
        }
      ]);
    });
};