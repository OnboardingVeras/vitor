/* eslint-disable no-console */
import Koa from 'koa';
import Router from 'koa-router';
import getPort from 'get-port';
import asyncRetry from 'async-retry';
// eslint-disable-next-line no-unused-vars
import { Server as httpServer } from 'http';
import hello from './handlers/hello';

class Server {
    private app : Koa

    private router : Router

    private port : number

    private server : httpServer

    constructor() {
      this.app = new Koa();
      this.router = new Router();
    }

    public async getPort() {
      return this.port;
    }

    public async getApp() {
      return this.app;
    }

    private async setPort() {
      this.port = await getPort({ port: getPort.makeRange(3000, 3100) });
    }

    private async setRoutes() {
      this.router.get('/hello', hello);
    }

    public async startServer() {
      await asyncRetry(async (bail) => {
        try {
          await this.setPort();
          await this.setRoutes();

          this.app.use(this.router.routes());

          this.server = this.app.listen(this.port, async () => {
            console.debug(`Server listening on port: ${this.port} @ http://localhost:${this.port}`);
          }).on('error', (err) => {
            console.error(err);
          });

          return this.server;
        } catch (error) {
          console.debug(`Server failed to start on port:${this.port}. Reason: ${error.message}.`);
          if (error.code !== 'EADDRINUSE') return bail(error);
          return error;
        }
      }, { retries: 2, maxTimeout: 50, minTimeout: 50 });
    }

    public closeServer() {
      this.server.close();
    }
}

export default Server;
