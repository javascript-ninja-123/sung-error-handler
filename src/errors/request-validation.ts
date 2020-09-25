import {CustomError, ErrorResponse, StatusCode} from "./error"
import {ValidationError} from "express-validator"


export class RequestValidationError extends CustomError {
    statusCode = StatusCode.INTERNAL_SERVER_ERROR
    constructor(public errors: ValidationError[]){
        super("request validation error")
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
    serializeError(): ErrorResponse[] {
        return this.errors.map((err: ValidationError) => {
            return {
                message: err.msg,
                field: err.param
            }
        })
    }
}