# code-tunes-app

A Full-stack project using React, redux, hooks, bootstrap on the frontend and Node.js, express, MongoDB and JWT on the backend          

Personal project that I did with the knowledge that I acquired in the last months of study, at trybe and other courses that I also took, first project that I implemented the two sides of an application and I was proud of the result


# Table of contents

- [Getting Started](#getting-started)
- [Preview](#preview)
- [More Info](#more-info)
- [Installation](#installation)
- [Contact](#contact)


# Preview







https://user-images.githubusercontent.com/104790789/203874295-d8996932-f76b-4d29-ad67-0c09ba6011d8.mp4







## Getting Started

This API works with a mongoDB database, some endpoints have validations with JWT and are working with route management, it works remote and also works locally and you need to download the repository     

The api was uploaded with a public IP through the AWS cloud system with EC2. To see the code of the project you can install it locally ( Below you will find the instructions ).       

The token expires in 6 minutes, this time is for testing the site and to see the functionalities of the token because when it expires you cannot make requests and are redirected to the login page again



API BASE URL: http://15.228.199.125:3003        
CLIENT-SIDE BASE URL: http://15.228.199.125:3002  

Project have more endpoints, install repo and see more !

### More Info

The application works with its own api to manage the users and their favorite songs saved by them and an external itunes api to list some music previews 

The email and username fields have checks in the database so as not to have usernames and emails repeated, the application also checks the password in the database with the password passed by the user to log in and update some information         

#### More details about the functionalities of each page:     

Login page, url(http://15.228.199.125:3002) : On this page you can login with your registered account, in case you haven't registered yet, there is a link that redirects you to the registration page           

Register Page url(http://15.228.199.125:3002/register): On this page you can register, it has several registration validations to filter data correctly after registering you go to the login page

Home page url(http://15.228.199.125:3002/search): On this page you can search for artists and albums through the input and you are redirected to the album and its songs page when you click on one. There is a header with links that go to the home and favorites and there is a dropdown where your user name appears and you can go to your profile and log out

Album page url(http://15.228.199.125:3002/album/:albumId) : This page shows all the songs of the album and you can favorite, and listen to the preview of the songs

Favorite page url(http://15.228.199.125:3002/favorites) : On this page you can see your favorite songs already liked and if you want you can remove them from your favorites again

Profile Page url(http://15.228.199.125:3002/profile) : On this page you can see your registered information and there is a button that allows you to edit the information
  

### Installation  

Inside the project repo you can see the project files in more detail.

Clone the repo:     
```
git clone https://github.com/RuhamLeal/code-tunes-app.git    
```

Go to project folder:     
```
cd code-tunes-app
```
          

### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
