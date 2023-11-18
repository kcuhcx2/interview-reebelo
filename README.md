# Overview!

- I hope you find this readme.md useful - please note that a lot of the handlers / services are very bare-boned, mostly because of time constraints. Read more to get info!

## Structure / Design

### High level
- **We have 4 parts to this repo**
1. `frontend-portal` - React / Nextjs app
2. `customer-bff` - Nodejs app that acts as a BFF (Backend for Frontend-portal) for the customer (frontend-portal) app
3. `ops-bff` - Nodejs app that acts as a BFF (Backend for Frontend-portal) for the operations side
4. `backend` - Nodejs app that acts as the source of truth for the data

### Flow
To visualise the flow it goes such as:
```
frontend-portal => customer-bff => backend
frontend-portal => ops-bff => backend
```

### BFF-Apis
Both the `customer-bff` and `ops-bff` have their own openapi specs to see how to call and expect the correct response
[ops-bff](./ops-bff/openapi.yaml) and [customer-bff](./customer-bff/openapi.yaml)

#### Architecture
Both the `customer-bff` and `ops-bff` are behind their own **api-gateway**

- The lambdas are kept lightweight to help with minimal impact on cold-starts. No added frameworks such as nestjs.
- Api gateway provides a lot of benefits such as having custom domain names, easy to deal with CORS, throttling and rate limiting, logging.

- A few limitations to consider are the base default limit of 10,000 request p/s but this can also be increased.
- Api gateway timeouts
- Request size in MB

---

### Backend
The backend api is where the source of truth is going to stored - I've referenced it as **Account Management Service** sometimes in the code.
#### Architecture
We have two dynamodb tables - **Orders** and **Products**. They will both be set to on-demand capacity mode so there is no fixed limit on the number of requests you can send per second.
- One of the reasons I used dynamodb was the fact we had to constantly read / write to the tables and it has a lot of similarities to OLTP systems

## Setup
I've added a `.nvmrc` file - where if you use nvm, you can run `nvm use` and you might also need to run `nvm install` to get the correct verison this project want us to use for node

## Testing
Although I don't have any existing tests. In the [ops-portal package.json](./ops-bff/package.json) you can run the below to deploy your ops-bff locally using the serverless-offline plugin (very cool!)
```
npm run build
npm run start:offline
```
I set this up as more of a POC on how we can then wire up these repo's and essentially be able to run functional tests and see how the services can interact with eacher.

If I had more time I could also deploy the dynamodb tables locally.

## Considerations / Changes

### Backend / BFF apis
If I had more time there are a few things I would look into and/or possibly change
- To save/get information like products we currently have to go back into the backend. A potential change would be we have materialised views or some sort of caching on the BFF side. We could have a dynamodb table as a materialised view, or use something like Redis to quickly retrieve these products. The added complexity would be ensuring the products are up to date with the source of truth.
- This could also mean implementing PostgreSQL as the source of truth in the backend
- I would implement functional testing to see how all the seperate services can call each other.
- I would also implement unit testing using things like jest and for the frontend-portal React Testing Library
- In terms of lambdas we could look at setting up things like `provisionedConcurrency` to help minimise cold-starts.
- In the [backend notify-ops service](/backend/src/service/opsService.ts) I mentioned it might be worth to have an asynchronous flow such as setting up a global event bridge and use domain events to have a seperate service to aggregate this information such as snowflake for business decisions! To extend onto this we could look at having a CQRS pattern to keep track of all events and updates within our system.
- Lastly, I was thinking of having the ops-bff send off our events such as updating products to an SQS queue as a lot of this could be done asynchronously. This can help with fault tolerance, retry logic and works well with event-driven architecture.

### Frontend-portal
- If time permitted implement unit testing using things like jest and for the frontend-portal React Testing Library
- I would have explored using Redux Tool Kit for storing state. Personally I like the verboseness of it.
- Implemented the ops-portal.