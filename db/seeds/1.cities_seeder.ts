import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Hapus semua data lama
  await knex('cities').del();

  const cities = [
    { name: 'Jakarta', lat: -6.2088, lon: 106.8456, isActive: true, isInIndonesia: true },
    { name: 'Surabaya', lat: -7.2504, lon: 112.7688, isActive: true, isInIndonesia: true },
    { name: 'Bandung', lat: -6.9175, lon: 107.6191, isActive: true, isInIndonesia: true },
    { name: 'Semarang', lat: -6.9667, lon: 110.4167, isActive: false, isInIndonesia: true },
    { name: 'Yogyakarta', lat: -7.7956, lon: 110.3695, isActive: false, isInIndonesia: true },
    { name: 'Denpasar', lat: -8.6705, lon: 115.2126, isActive: true, isInIndonesia: true },
    { name: 'Makassar', lat: -5.1477, lon: 119.4327, isActive: true, isInIndonesia: true },
    { name: 'Medan', lat: 3.5952, lon: 98.6722, isActive: true, isInIndonesia: true },
    { name: 'Palembang', lat: -2.9761, lon: 104.7754, isActive: true, isInIndonesia: true },
    { name: 'Pekanbaru', lat: 0.5333, lon: 101.45, isActive: false, isInIndonesia: true },
    { name: 'Padang', lat: -0.9492, lon: 100.3543, isActive: true, isInIndonesia: true },
    { name: 'Banda Aceh', lat: 5.5483, lon: 95.3238, isActive: false, isInIndonesia: true },
    { name: 'Pontianak', lat: -0.0263, lon: 109.3425, isActive: false, isInIndonesia: true },
    { name: 'Balikpapan', lat: -1.2379, lon: 116.8529, isActive: false, isInIndonesia: true },
    { name: 'Samarinda', lat: -0.5022, lon: 117.1536, isActive: true, isInIndonesia: true },
    { name: 'Manado', lat: 1.4748, lon: 124.8421, isActive: false, isInIndonesia: true },
    { name: 'Jayapura', lat: -2.5337, lon: 140.7181, isActive: false, isInIndonesia: true },
    { name: 'Ambon', lat: -3.6556, lon: 128.1909, isActive: false, isInIndonesia: true },
    { name: 'Ternate', lat: 0.7903, lon: 127.3845, isActive: false, isInIndonesia: true },
    { name: 'Kupang', lat: -10.1772, lon: 123.607, isActive: false, isInIndonesia: true },
    { name: 'Mataram', lat: -8.5828, lon: 116.1168, isActive: false, isInIndonesia: true },
    { name: 'Banjarmasin', lat: -3.3194, lon: 114.5909, isActive: true, isInIndonesia: true },
    { name: 'Tarakan', lat: 3.3071, lon: 117.5913, isActive: true, isInIndonesia: true },
    { name: 'Palu', lat: -0.8917, lon: 119.8707, isActive: false, isInIndonesia: true },
    { name: 'Gorontalo', lat: 0.5412, lon: 123.0595, isActive: false, isInIndonesia: true },
    { name: 'Mamuju', lat: -2.6362, lon: 118.943, isActive: true, isInIndonesia: true },
    { name: 'Georgetown', lat: 5.4101, lon: 100.3356, isActive: true, isInIndonesia: false },
    { name: 'Kuala Lumpur', lat: 3.139, lon: 101.6869, isActive: true, isInIndonesia: false },
    { name: 'Singapore', lat: 1.3521, lon: 103.8198, isActive: true, isInIndonesia: false },
    { name: 'Kuching', lat: 1.5534, lon: 110.3591, isActive: true, isInIndonesia: false },
    { name: 'Bandar Seri Begawan', lat: 4.9031, lon: 114.9398, isActive: true, isInIndonesia: false },
    { name: 'Dili', lat: -8.5568, lon: 125.5603, isActive: true, isInIndonesia: false },
    { name: 'Ho Chi Minh City', lat: 10.8231, lon: 106.6297, isActive: true, isInIndonesia: false },
    { name: 'Cebu City', lat: 10.3157, lon: 123.8854, isActive: true, isInIndonesia: false },
    { name: 'Devano City', lat: 14.5995, lon: 120.9842, isActive: true, isInIndonesia: false }
  ];


  // Insert data
  await knex('cities').insert(
    cities.map((city) => ({
      id: uuidv4(),
      name: city.name,
      lat: city.lat,
      lon: city.lon,
      isActive: city.isActive,
      isInIndonesia: city.isInIndonesia,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    }))
  );
}
