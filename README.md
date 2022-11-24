# code-tunes-app

A Full-stack project using React, redux, hooks, bootstrap on the frontend and Node.js, express, MongoDB and JWT on the backend          

Personal project that I did with the knowledge that I acquired in the last months of study, at trybe and other courses that I also took, first project that I implemented the two sides of an application and I was proud of the result


# Table of contents

- [Getting Started](#getting-started)
- [Preview](#preview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Contact](#contact)


# Preview





https://user-images.githubusercontent.com/104790789/203871012-33efb106-1136-4ee2-8350-dc3234ddd562.mp4





## Getting Started

This API works with a mongoDB database, some endpoints have validations with JWT and are working with route management, it works remote and also works locally and you need to download the repository     

The api was uploaded with a public IP through the AWS cloud system with EC2. To see the code of the project you can install it locally ( Below you will find the instructions ).      



API BASE URL: http://15.228.199.125:3003        
APP BASE URL: http://15.228.199.125:3002  

Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version         
MySQL 5.7 version or 8.0 version        
Docker(v20.10) and docker-compose(v2.5.0) (If you dont have MySQL installed)        

### Installation  

Clone the repo:     
```
git clone https://github.com/RuhamLeal/store-manager-api.git    
```

Go to project folder:     
```
cd store-manager-api   
```

Install dependencies:     
```
npm install    
```

Populate database with scripts:    

migration.sql then seed.sql

Run server:
```
npm start    
```           
               
                  
                    
                     
### If you dont have node 16 version or MySQL installed, you can run with docker-compose:   
```
docker-compose up -d
```
 
Await download the images and then:    
```
docker exec -it store_manager bash
```

Inside the container, install dependecies:       
```
npm install
```

Populate database with scripts:    

migration.sql then seed.sql

And run server:       
```
npm start
```

### Tests

The aplication has unit tests for all layers, run with:
```
npm run test:mocha
```

### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
