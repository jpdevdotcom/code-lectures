INPUT VALIDATION:

1. install zod (npm i zod)
2. install zValidator (npm i @hono/zod-validator)
3. import zod (import \* as z from "zod")
4. import zValidator (import { zValidator } from "@hono/zod-validator")
5. create validator
6. create method with zValidator in it
    - Request Parameter: json
    - Call the validator

ENCRYPTION:

1. install bcrypt (npm i bcrypt)
2. import bcrypt (import bcrypt from "bcrypt")
3. create callback function
4. create hash method inside callback function
5. display the hashed password (console.log())
6. create compare method inside callback function
7. create condition for compare method (if())
8. display whether the condition is Equal or NOT Equal (inside of if-else condition)

HTTP METHOD WITH INPUT INPUT VALIDOTOR AND ENCRYPTION:

1. import zod (import \* as z from "zod")
2. import zValidator (import { zValidator } from "@hono/zod-validator")
3. import bcrypt (import bcrypt as bcrypt)
4. create validator
5. create HTTP Method
    - PARAMETERS:
        - endpoint
        - zValidator(request parameter, validator)
6. desctructure the password from the request body
7. create method for hashing the desctructured password
8. create method for comparing the desctructured password with the hashed password
9. create a condition to check whether the compared password is Equal or Not Equal
