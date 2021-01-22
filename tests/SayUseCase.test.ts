import { SayUseCase } from '../src/SayUseCase';
var chai = require('chai');
const expect = chai.expect

describe('say use case', () => {
    it('should give the message', async () => {
        const result = new SayUseCase("foo").handle()

        expect(result).equal("foo")        
    })
})