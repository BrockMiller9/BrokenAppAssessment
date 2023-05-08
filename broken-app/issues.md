# Broken App Issues

1. We change the variable type from var and let to const because we do not want to reassign the variable.
2. We have to add a Promise.all() to the request because we want to wait for all the requests to finish before we return the response. Without doing this we will get an error because we are trying to return a response before the requests have finished.
3. We also add an if statement to check if the response includes developers. If it does not include developers, we return a 404 status code and a message saying that the developers could not be found.
4. We also removed the JSON.stringify() because we do not need to convert the response to a string since express will do that for us.
