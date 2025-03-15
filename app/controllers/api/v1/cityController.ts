import { Request, Response, NextFunction } from 'express';
import * as cityService from '../../../service/cityService';

const listCities = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await cityService.listCities(); 
    if (result.status === 200) {
      res.status(200).json({
        status: 'OK',
        data: { cities: result.data?.data }, 
        meta: { total: result.data?.count },
      });
    } else {
      res.status(400).json({
        status: 'FAIL',
        message: result.message,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const showCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await cityService.getCityById(req.params.id);
    res.status(result.status).json({ 
      status: result.status === 200 ? 'OK' : 'FAIL',
      data: result.status === 200 ? result.city : null,
      message: result.message
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const createCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await cityService.createCity(req.body);
    res.status(result.status).json({
      status: 'OK',
      data: result.city,
      message: result.message,
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const updateCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result: { status: number; message: string; data?: any } = await cityService.updateCity(req.params.id, req.body);
    res.status(result.status).json({ 
      status: result.status === 200 ? 'OK' : 'FAIL',
      data: result.status === 200 ? result.data : null,
      message: result.message
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const destroyCity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await cityService.deleteCity(req.params.id);
    if (result.status === 404) {
      res.status(404).json({
        status: 'FAIL',
        message: result.message,
      });
      return;
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

export default {
  list: listCities,
  show: showCity,
  create: createCity,
  update: updateCity,
  destroy: destroyCity,
};