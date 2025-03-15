import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('seas', (table: Knex.TableBuilder) => {
    table.string('id', 255).primary().notNullable();
    table.string('name', 255).notNullable();  
    table.float('lat').notNullable(); 
    table.float('lon').notNullable();  
    table.timestamps(true, true);  
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('seas');
}
