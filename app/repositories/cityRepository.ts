import { Knex } from 'knex';
import { City, CityModel } from '../models/City';
import knexInstance from '../../config/knex';

export default class CityRepository {
  private readonly knexInstance: Knex;

  constructor(knexInstance: Knex) {
    this.knexInstance = knexInstance;
  }

  public async create(city: City): Promise<City> {
    return await CityModel.query(this.knexInstance).insert(city);
  }

  public async getAll(): Promise<City[]> {
    return await CityModel.query(this.knexInstance);
  }

  public async getById(id:string): Promise<City | undefined> {
    return await CityModel.query(this.knexInstance).findById(id);
  }

  public async update(id: string, city: City): Promise<City> {
    return await CityModel.query(this.knexInstance).patchAndFetchById(id, city);
  }

  public async delete(id: string): Promise<void> {
    await CityModel.query(this.knexInstance).deleteById(id);
  }

  public async searchCities(params: Record<string, string | number>): Promise<City[]> {
    let query = CityModel.query(this.knexInstance);

    // Loop untuk menambahkan kondisi pencarian berdasarkan parameter yang diterima
    for (const key in params) {
      if (key === 'lat' || key === 'lon') {
        query = query.where(key, '=', parseFloat(params[key] as string)); // Ubah lat/lon menjadi float
      } else if (key === 'isActive') {
        query = query.where(key, '=', params[key] === 'true'); // Ubah isActive menjadi boolean
      } else {
        query = query.where(key, 'ilike', `%${params[key]}%`); // Pencarian case insensitive
      }
    }

    return await query;
  }
}

export const cityRepository = new CityRepository(knexInstance);