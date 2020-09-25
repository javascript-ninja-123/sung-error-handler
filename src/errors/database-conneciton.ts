import {CustomError, ErrorResponse, StatusCode} from "./error"


export class DatabaseConnectionError extends CustomError {
    public statusCode = StatusCode.INTERNAL_SERVER_ERROR
    constructor(public message: string = "database connection error"){
        super(message)
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
    serializeError(): ErrorResponse[] {
        return [
            {
                message: "database connection error"
            }
        ]
    }
}