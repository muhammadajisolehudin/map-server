import { Model } from 'objection';
import { v4 as uuidv4 } from 'uuid';

export interface City {
  id: string; 
  name: string;
  lat: number;
  lon: number;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

export class CityModel extends Model {
  id!: string; 
  name!: string;
  lat!: number;
  lon!: number;
  isActive!: boolean;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return 'cities';
  }

  $beforeInsert() {
    this.id = uuidv4(); // Menghasilkan UUID untuk id
    this.created_at = new Date(); // Set waktu saat dibuat
    this.updated_at = new Date(); // Set waktu saat dibuat
  }

  $beforeUpdate() {
    this.updated_at = new Date(); // Set waktu saat diperbarui
  }
}