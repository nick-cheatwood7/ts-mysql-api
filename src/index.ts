import 'reflect-metadata';
import http from 'http';
import express from 'express';
import cors from 'cors';
import config from '../mikro-orm.config';
import { EntityManager, MikroORM, RequestContext } from '@mikro-orm/core';
import { LoginRouter, UserRouter } from './routes';

export const DI = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
};

export const app = express();
const port = process.env.PORT || 3000;

export const init = (async () => {
  DI.orm = await MikroORM.init(config);
  DI.em = DI.orm.em;
  // Register middleware
  app.use(express.json());
  app.use(cors());
  // Link Entity Manager
  app.use((_req, _res, next) => {
    RequestContext.create(DI.orm.em, next);
  });
  // Link routers
  app.use('/login', LoginRouter);
  app.use('/users', UserRouter);
  // Start server
  DI.server = app.listen(port, () => {
    console.log(
      `MikroORM express TS server started at http://localhost:${port}`
    );
  });
})();
