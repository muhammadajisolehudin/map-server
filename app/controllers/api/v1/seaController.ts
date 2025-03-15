import { Request, Response, NextFunction } from 'express';
import * as seaService from '../../../service/seaService';

const listSeas = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log("masuk sini lahh")
  try {
    const result = await seaService.listSeas();  // Ganti ke listSeas()
    if (result.status === 200) {
      res.status(200).json({
        status: 'OK',
        data: { seas: result.data?.data },
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

const showSea = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await seaService.getSeaById(req.params.id);  // Ganti ke getSeaById()
    res.status(result.status).json({
      status: result.status === 200 ? 'OK' : 'FAIL',
      data: result.status === 200 ? result.sea : null,
      message: result.message,
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const createSea = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await seaService.createSea(req.body);  // Ganti ke createSea()
    res.status(result.status).json({
      status: 'OK',
      data: result.sea,
      message: result.message,
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const updateSea = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result: { status: number; message: string; data?: any } = await seaService.updateSea(req.params.id, req.body);  // Ganti ke updateSea()
    res.status(result.status).json({
      status: result.status === 200 ? 'OK' : 'FAIL',
      data: result.status === 200 ? result.data : null,
      message: result.message,
    });
  } catch (err) {
    res.status(500).json({
      status: 'ERROR',
      message: (err as Error).message,
    });
  }
};

const destroySea = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await seaService.deleteSea(req.params.id);  // Ganti ke deleteSea()
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
  list: listSeas,
  show: showSea,
  create: createSea,
  update: updateSea,
  destroy: destroySea,
};
