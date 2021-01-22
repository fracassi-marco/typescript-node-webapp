import { App } from '../src/App'
var chai = require('chai');
chai.use(require('chai-string'));
const expect = chai.expect

describe('app', () => {
    it('should bind via http', async () => {
        const app = new App().build()

        const response = await app.inject({
            method: 'GET',
            url: '/ping'
        });

        expect(response.statusCode).equal(200)
        expect(response.body).to.startsWith("pong")
    })

    it('should parse json request', async () => {
        const app = new App().build()

        const response = await app.inject({
            method: 'POST',
            url: '/say',
            payload: '{"message":"hello"}',
            headers: { 'Content-type': 'application/json' }
        });
        
        expect(response.body).equal("hello")
    })
})