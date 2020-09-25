import {CustomError, ErrorResponse, StatusCode} from "./error"


export class NotFoundError extends CustomError {
    statusCode = StatusCode.NOT_FOUND
    constructor(public message: string ="not found"){
        super(message)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
    serializeError(): ErrorResponse[] {
        return [
            {
                message: "not found"
            }
        ]
    }
}