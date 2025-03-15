import express, { Router } from 'express';
import * as controllers from '../app/controllers';

const apiRouter: Router = express.Router();

// City Routes
apiRouter.get('/api/v1/cities', controllers.api.v1.cityController.list);
apiRouter.get('/api/v1/cities/:id', controllers.api.v1.cityController.show);
apiRouter.post('/api/v1/cities', controllers.api.v1.cityController.create);
apiRouter.put('/api/v1/cities/:id', controllers.api.v1.cityController.update);
apiRouter.delete('/api/v1/cities/:id', controllers.api.v1.cityController.destroy);

export default apiRouter;
