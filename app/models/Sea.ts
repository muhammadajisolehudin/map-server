import { Model } from 'objection';
import { v4 as uuidv4 } from 'uuid';

export interface Sea {
  id: string; 
  name: string;
  lat: number;
  lon: number;
  created_at: Date;
  updated_at: Date;
}

export class SeaModel extends Model {
  id!: string; 
  name!: string;
  lat!: number;
  lon!: number;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return 'seas';
  }

  $beforeInsert() {
    this.id = uuidv4(); 
    this.created_at = new Date(); 
    this.updated_at = new Date(); 
  }
  

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}