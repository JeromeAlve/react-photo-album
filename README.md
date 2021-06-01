# League Coding Challenge - Jerome Alve

React Application for navigating photo albums. 

## Getting started

To get the frontend running locally, in the root folder:

- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses create-react-app)

To run tests:
- `npm test` 


## Assumptions and Trade-Offs

1. Given the API `https://jsonplaceholder.typicode.com/users/1/albums`, it is assumed that the application is for a single user.
2. Each album has a unique **:ALBUM_ID** which is used to fetch data for a particular album
3. The italicization on the search function works for single word search use cases only.
4. Photos are not clickable as only the thumbnails and captions are displayed.
