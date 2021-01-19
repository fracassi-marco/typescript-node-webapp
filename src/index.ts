import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => { return new PingPongUseCase().handle() })

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

class PingPongUseCase {
    handle() {
        return 'pong\n'
    }
}