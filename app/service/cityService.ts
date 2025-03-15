// import cityRepository from "../repositories/cityRepository";

import { cityRepository } from "../repositories/cityRepository";

// import { cityRepository } from "../repositories/cityRepository";

interface City {
  id: string; // Menggunakan string untuk UUID
  name: string;
  lat: number;
  lon: number;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
}

interface ListResult {
  data: City[];
  count: number;
}

const createCity = async (body: City): Promise<{ status: number; message: string; city?: City }> => {
    try {
      const newCity: City = {
        ...body,
        created_at: new Date(),
        updated_at: new Date(),
      };
  
      const createdCity = await cityRepository.create(newCity);
      return { status: 201, message: 'City created successfully', city: createdCity };
  
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        return { status: 400, message: `Validation error: ${error.message}` };
      }
      return { status: 500, message: `Internal server error: ${error.message}` };
    }
  };

const listCities = async (): Promise<{ status: number; data?: ListResult; message?: string }> => {
  try {
    const data = await cityRepository.getAll();
    return { status: 200, data: { data, count: data.length } };
  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const getCityById = async (id: string): Promise<{ status: number; message: string; city?: City }> => {
  try {
    const city = await cityRepository.getById(id);
    if (!city) {
      return { status: 404, message: `City with id ${id} not found` };
    }
    return { status: 200, message: 'The city was found', city };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const updateCity = async (id: string, body: City): Promise<{ status: number; message: string }> => {
  try {
    const city = await cityRepository.getById(id);
    if (!city) {
      return { status: 404, message: `City with id ${id} not found` };
    }

    const updatedCity: City = {
      ...body,
      updated_at: new Date(), // set current date
    };

    await cityRepository.update(id, updatedCity);
    return { status: 200, message: 'City updated successfully' };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const deleteCity = async (id: string): Promise<{ status: number; message: string }> => {
  try {
    const city = await cityRepository.getById(id);
    if (!city) {
      return { status: 404, message: 'City not found' };
    }

    await cityRepository.delete(id);
    return { status: 200, message: 'City removed successfully' };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const searchCities = async (params: Record<string, string | number>): Promise<{ status: number; data?: City[]; message?: string }> => {
  try {
    const cities = await cityRepository.searchCities(params);
    return { status: 200, data: cities };
  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

export { 
  createCity, 
  listCities, 
  getCityById, 
  updateCity, 
  deleteCity,
  searchCities 
};