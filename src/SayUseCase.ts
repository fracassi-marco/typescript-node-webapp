import { Message } from "./Message"

export class SayUseCase {

    private messageText: string

    constructor(message: string) {
        this.messageText = message
    }

    handle() {
        return new Message(this.messageText)
    }
}
