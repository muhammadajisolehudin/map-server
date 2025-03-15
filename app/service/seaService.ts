// import { seaRepository } from "../repositories/seaRepository";
import { seaRepository } from "../repositories/seaRepository";

// import { seaRepository } from "../repositories/seaRepository";

interface Sea {
  id: string; // Menggunakan string untuk UUID
  name: string;
  lat: number;
  lon: number;
  created_at: Date;
  updated_at: Date;
}

interface ListResult {
  data: Sea[];
  count: number;
}

const createSea = async (body: Sea): Promise<{ status: number; message: string; sea?: Sea }> => {
  try {
    const newSea: Sea = {
      ...body,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const createdSea = await seaRepository.create(newSea);
    return { status: 201, message: 'Sea created successfully', sea: createdSea };

  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return { status: 400, message: `Validation error: ${error.message}` };
    }
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const listSeas = async (): Promise<{ status: number; data?: ListResult; message?: string }> => {
  try {
    const data = await seaRepository.getAll();
    return { status: 200, data: { data, count: data.length } };
  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const getSeaById = async (id: string): Promise<{ status: number; message: string; sea?: Sea }> => {
  try {
    const sea = await seaRepository.getById(id);
    if (!sea) {
      return { status: 404, message: `Sea with id ${id} not found` };
    }
    return { status: 200, message: 'The sea was found', sea };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const updateSea = async (id: string, body: Sea): Promise<{ status: number; message: string }> => {
  try {
    const sea = await seaRepository.getById(id);
    if (!sea) {
      return { status: 404, message: `Sea with id ${id} not found` };
    }

    const updatedSea: Sea = {
      ...body,
      updated_at: new Date(), // set current date
    };

    await seaRepository.update(id, updatedSea);
    return { status: 200, message: 'Sea updated successfully' };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const deleteSea = async (id: string): Promise<{ status: number; message: string }> => {
  try {
    const sea = await seaRepository.getById(id);
    if (!sea) {
      return { status: 404, message: 'Sea not found' };
    }

    await seaRepository.delete(id);
    return { status: 200, message: 'Sea removed successfully' };

  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

const searchSeas = async (params: Record<string, string | number>): Promise<{ status: number; data?: Sea[]; message?: string }> => {
  try {
    const seas = await seaRepository.searchSeas(params);
    return { status: 200, data: seas };
  } catch (error: any) {
    return { status: 500, message: `Internal server error: ${error.message}` };
  }
};

export { 
  createSea, 
  listSeas, 
  getSeaById, 
  updateSea, 
  deleteSea,
  searchSeas 
};
