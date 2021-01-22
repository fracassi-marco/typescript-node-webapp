
export class SayUseCase {

    message: string;

    constructor(message: string) {
        this.message = message;
    }

    handle() {
        return this.message;
    }
}
