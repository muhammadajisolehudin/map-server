import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cities', (table: Knex.TableBuilder) => {
        table.string('id', 255).primary().notNullable();
        table.string('name', 100).notNullable(); 
        table.float('lat').notNullable(); 
        table.float('lon').notNullable(); 
        table.boolean('isActive').notNullable().defaultTo(true);
        table.string('updated_by', 255);
        table.timestamps(true, true); 
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cities');
}