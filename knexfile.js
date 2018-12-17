module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/trolls'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
