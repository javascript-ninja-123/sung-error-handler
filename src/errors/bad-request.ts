import {CustomError, ErrorResponse, StatusCode} from "./error"



export class BadRequestError extends CustomError {
    public statusCode = StatusCode.BAD_REQUEST
    constructor(public message: string = "bad request error"){
        super(message)
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }
    serializeError(): ErrorResponse[] {
        return [
            {
                message: this.message
            }
        ]
    }
}