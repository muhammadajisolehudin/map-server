import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Hapus semua data lama
  await knex('cities').del();

  // Data kota
  const cities = [
    { name: 'Jakarta', lat: -6.2088, lon: 106.8456, isActive: true },
    { name: 'Surabaya', lat: -7.2504, lon: 112.7688, isActive: true },
    { name: 'Bandung', lat: -6.9175, lon: 107.6191, isActive: true },
    { name: 'Semarang', lat: -6.9667, lon: 110.4167, isActive: false },
    { name: 'Yogyakarta', lat: -7.7956, lon: 110.3695, isActive: false },
    { name: 'Denpasar', lat: -8.6705, lon: 115.2126, isActive: true },
    { name: 'Makassar', lat: -5.1477, lon: 119.4327, isActive: false },
    { name: 'Medan', lat: 3.5952, lon: 98.6722, isActive: true },
    { name: 'Palembang', lat: -2.9761, lon: 104.7754, isActive: false },
    { name: 'Pekanbaru', lat: 0.5333, lon: 101.45, isActive: false },
    { name: 'Padang', lat: -0.9492, lon: 100.3543, isActive: true },
    { name: 'Banda Aceh', lat: 5.5483, lon: 95.3238, isActive: false },
    { name: 'Pontianak', lat: -0.0263, lon: 109.3425, isActive: false },
    { name: 'Balikpapan', lat: -1.2379, lon: 116.8529, isActive: false },
    { name: 'Samarinda', lat: -0.5022, lon: 117.1536, isActive: false },
    { name: 'Manado', lat: 1.4748, lon: 124.8421, isActive: false },
    { name: 'Jayapura', lat: -2.5337, lon: 140.7181, isActive: false },
    { name: 'Ambon', lat: -3.6556, lon: 128.1909, isActive: false },
    { name: 'Ternate', lat: 0.7903, lon: 127.3845, isActive: false },
    { name: 'Kupang', lat: -10.1772, lon: 123.607, isActive: false },
    { name: 'Mataram', lat: -8.5828, lon: 116.1168, isActive: false },
    { name: 'Banjarmasin', lat: -3.3194, lon: 114.5909, isActive: false },
    { name: 'Tarakan', lat: 3.3071, lon: 117.5913, isActive: true },
    { name: 'Palu', lat: -0.8917, lon: 119.8707, isActive: false },
    { name: 'Gorontalo', lat: 0.5412, lon: 123.0595, isActive: false },
  ];

  // Insert data
  await knex('cities').insert(
    cities.map((city) => ({
      id: uuidv4(),
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      isActive: city.isActive,
      updated_by: null,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    }))
  );
}
