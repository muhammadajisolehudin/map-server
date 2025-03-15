import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  await knex('seas').del();

  const seas = [
    { name: "Andaman Sea", lat: 10.0, lon: 95.0 },
    { name: "Sulu Sea", lat: 6.0, lon: 120.5 },
    { name: "Celebes Sea", lat: 3.0, lon: 122.0 },
    { name: "Molucca Sea", lat: 1.5, lon: 126.0 },
    { name: "Banda Sea", lat: -4.5, lon: 129.0 },
    { name: "Timor Sea", lat: -10.0, lon: 125.0 },
    { name: "Arafura Sea", lat: -9.0, lon: 135.0 },
    { name: "Gulf of Carpentaria", lat: -13.0, lon: 139.0 },
    { name: "Gulf of Thailand", lat: 10.0, lon: 100.0 }
  ];
  
  await knex('seas').insert(
    seas.map((sea) => ({
      id: uuidv4(),  
      name: sea.name,
      lat: sea.lat,
      lon: sea.lon,
      created_at: knex.fn.now(), 
      updated_at: knex.fn.now(),
    }))
  );
}
