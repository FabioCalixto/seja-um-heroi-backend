/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('incidents')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('incidents').insert([
        {
          id: 1,
          title: 'Cadelinha atropelada',
          description: 'Ajude-nos a ajudar a cadelinha atropelada',
          value: 5000,
          ong_id: '1'
        },
        {
          id: 2,
          title: 'Cachorro atropelada',
          description: 'Ajude-nos a ajudar a cadelinha atropelada',
          value: 4000,
          ong_id: '2'
        }
      ])
    )
}
