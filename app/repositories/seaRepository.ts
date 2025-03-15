import { Knex } from 'knex';
import { Sea, SeaModel } from '../models/Sea';
import knexInstance from '../../config/knex';

export default class SeaRepository {
  private readonly knexInstance: Knex;

  constructor(knexInstance: Knex) {
    this.knexInstance = knexInstance;
  }

  public async create(sea: Sea): Promise<Sea> {
    return await SeaModel.query(this.knexInstance).insert(sea);
  }

  public async getAll(): Promise<Sea[]> {
    return await SeaModel.query(this.knexInstance);
  }

  public async getById(id: string): Promise<Sea | undefined> {
    return await SeaModel.query(this.knexInstance).findById(id);
  }

  public async update(id: string, sea: Sea): Promise<Sea> {
    return await SeaModel.query(this.knexInstance).patchAndFetchById(id, sea);
  }

  public async delete(id: string): Promise<void> {
    await SeaModel.query(this.knexInstance).deleteById(id);
  }

  public async searchSeas(params: Record<string, string | number>): Promise<Sea[]> {
    let query = SeaModel.query(this.knexInstance);

    // Loop untuk menambahkan kondisi pencarian berdasarkan parameter yang diterima
    for (const key in params) {
      if (key === 'lat' || key === 'lon') {
        query = query.where(key, '=', parseFloat(params[key] as string)); // Ubah lat/lon menjadi float
      } else {
        query = query.where(key, 'ilike', `%${params[key]}%`); // Pencarian case insensitive
      }
    }

    return await query;
  }
}

export const seaRepository = new SeaRepository(knexInstance);
