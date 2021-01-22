import fastify, { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { PingPongUseCase } from './PingPongUseCase';
import { SayBody } from './SayBody';
import { SayUseCase } from './SayUseCase';

export class App {  

  build() {
    var server: FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance> = fastify();    
    server.get('/ping', async (request, reply) => { return new PingPongUseCase().handle(); })
    server.post<{Body: SayBody}>('/say', async (request, reply) => {                               
      return new SayUseCase(request.body.message).handle(); 
    })

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
