# Project_ApiTracks
API that allows the registration of a song and the storage of a multimedia file, includes registration, login and JWT validation

# Steps to start the project
## 1
add the .env file by making a copy of the .env.example file, in the .env file the DB_URI corresponds to mongodb+srv://Admin:chUprzevHFUG4lYG@cluster0.d6qhdhw.mongodb.net/ApiDB?retryWrites=true&w=majority and the SLACK_WEBHOOK corresponds to ttps://hooks.slack.com/services/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
## 2
Download all dependencies with npm I
## 3
Start the project server with the command npm run dev
## 4
Follow the steps of the postman documentation to make use of the project https://documenter.getpostman.com/view/23205550/VVBcNNVu
### To keep in mind
To carry out the queries it is necessary to have a JWT token, this token is obtained by entering with your user, if you do not have a user you can register your data and obtain a token... The token has an expiration time of 8H, but it does not worry if you log in you get a new one
