import fastify from 'fastify';
import { PingPongUseCase } from './PingPongUseCase';

export class App {  

  build() {
    var server = fastify();
    server.get('/ping', async (request, reply) => { return new PingPongUseCase().handle(); });
    return server;
  }

  start() {
    this.build().listen(8080, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  }
}
