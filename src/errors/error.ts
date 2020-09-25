

export enum StatusCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    TIME_OUT = 408,
    INTERNAL_SERVER_ERROR = 500
}

export interface ErrorResponse {
    message: string;
    fields?: string;
}


export abstract class CustomError extends Error {

    abstract statusCode: StatusCode;
    constructor(public message: string){
        super(message)
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeError(): ErrorResponse[]
}