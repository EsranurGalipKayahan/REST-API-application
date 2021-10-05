# REST-API-application
A simple example of REST API with express and supertest

<h3>Introduction</h3>
In this test we are going to code along to a simple movies REST API. Afterwards we are going to refactor it and add some features to make it a beautiful and robust API for end
users. 

<h3>Steps</h3>
 <ol> <li> We are making the project in this tutorial: <a href="https://www.youtube.com/watch?v=coyUaGdGqp8" target="__blank">Building A REST API Using Node.JS Tutorial</a></li>
   <li> Then we are fixing the things mentioned below in the project </li>
    <ul>
     <li>Spliting up the code into logical files, controllers with controllers and routes with routes</li>
        <li>Making sure that the status codes are always correct, let's be explicit here and always set them even if the default is 200. Rather be extra careful with this.</li>
        <li>Our POST request just lets the user add anything to the database.By adding the following checks (and make sure to inform the user with error messages what is going wrong):</li>
          <ol> 
             <li>Making sure that ONLY the fields title, director and release_date are given OR only put those 3 fields into the database</li>
             <li>Having our API decide what the id will be so that it is unique in our list. If everything is successful, let our user know what id was given to the movie so they can access it easily again</li>
             <li>If not successful then let the user know what is wrong. Remember that the user cannot see your code so the error message needs to have all the information the user of your API will need</li></ol>
   <li>If we try to delete a movie with an id that is not in the list, we still get the message that the movie was deleted. It would be much nicer if the person using our API gets the message that no movie with that id exists. Something like ‘The movie with id 123 not found in the database.’</li></ul>
   <li> Adding tests for all of our endpoints. We will need to add the supertest library and set it up. Also we keep to write test cases for both the happy path as well as the error paths we have created!</li></ol>
  
  <h3>API Documentation</h3>
  
   ![operations](https://user-images.githubusercontent.com/61011249/135954301-55c17fb5-88f5-4ef3-97f3-caafced6bffb.png)
   
   As you see from the picture given above, in this example, we have movie REST resourece. On this resource, we are allowed to just Create, Read and Delete operations of CRUD. We are not allowed to update operation.
   
