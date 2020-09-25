# Sung Error Handler

sung-error-handler is a Typescript library to handle error in an eloquent manner

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install --save sung-error-handler
```

## Usage

```javascript
import {errorHandler} from "sung-error-handler" 

const app = express()


app.use(errorHandler)

```

```javascript
import {BadRequestError} from "sung-error-handler" 

app.post("/apis/tickets", async (req: Request, res: Response) => {
   try{
       axios.post("")
      //your business logic
    }
  catch(err){
     throw new BadRequestError("custom message")
  }
})

```

```javascript
import {BadRequestError, DatabaseConnectionError, NotFoundError} from "sung-error-handler" 

app.post("/apis/tickets", async (req: Request, res: Response) => {
   try{
       axios.post("")
      //your business logic
    }
  catch(err){
     throw new NotFoundError()
  }
})

```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

