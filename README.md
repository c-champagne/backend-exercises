# backend-exercises

## Option 2 - Social App Backend
Build a server that handles the backend for yout twitter replacement. It should be able to GET all of the posts, and POST new ones.

### Steps to complete

1. Build a new server that uses the "bodyParser" middleware
2. add a "POST" request that accepts a "name" and a "message".
3. Store the name and message in a global variable array.
4. respond to the client with some sort of success message that includes the new "tweet".
5. add a "GET" request that sends back all the "tweets" currently in the global variable. (it might be a good idea to store some dummy data in there by default)