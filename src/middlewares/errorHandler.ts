import {CustomError} from "../errors"
import {Request, Response, NextFunction} from "express"


export const errorHandler = (err: Error, req: Request,res: Response,next: NextFunction) => {
    if(err instanceof CustomError) {
        res.status(err.statusCode).send({message: err.serializeError()})
        return
    }
    else{
        res.status(400).send({message: "something went wrong"})
    }
}