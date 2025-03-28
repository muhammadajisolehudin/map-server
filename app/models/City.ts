import { Model } from 'objection';
import { v4 as uuidv4 } from 'uuid';

export interface City {
  id: string; 
  name: string;
  lat: number;
  lon: number;
  isActive: boolean;
  isInIndonesia: boolean;
  created_at: Date;
  updated_at: Date;
}

export class CityModel extends Model {
  id!: string; 
  name!: string;
  lat!: number;
  lon!: number;
  isInIndonesia!: boolean;
  isActive!: boolean;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return 'cities';
  }

  $beforeInsert() {
    this.id = uuidv4(); 
    this.created_at = new Date(); 
    this.updated_at = new Date(); 
    if (this.isActive === undefined) {
        this.isActive = false;
      }

    if (this.isInIndonesia === undefined) {
        this.isInIndonesia = true;
      }
  }
  

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}