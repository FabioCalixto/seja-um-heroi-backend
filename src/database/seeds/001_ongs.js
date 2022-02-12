/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ongs')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('ongs').insert([
        {
          id: '1',
          name: 'Fernando ONG',
          email: 'nando4803@gmail.com',
          whatsapp: '+244 923215717',
          city: 'Luanda'
        },
        {
          id: '2',
          name: 'Fabio ONG',
          email: 'fabiocalixto16@gmail.com',
          whatsapp: '+244 923215717',
          city: 'Lubango'
        }
      ])
    )
}
