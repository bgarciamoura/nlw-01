import Knex from 'knex';

export async function up(knex:Knex) {
    await knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .unsigned().notNullable().references('id').inTable('points').onDelete('CASCADE').index();

        table.integer('item_id')
            .unsigned().notNullable().references('id').inTable('items').onDelete('CASCADE').index();
    });
}

export async function down(knex:Knex) {
    await knex.schema.dropTable('point_items');
}