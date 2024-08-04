const express = require("express")
// import express library

const app = express()
// rename express to app to keep in line with standard and normal use.

app.use('/book', (request, response) => {
    const book = {
        title: "LOTR",
        author: "J.R.R. Tolkein",
        genre: "fantasy"
    };
    // book object created
    const successResponse = {
        message: "Book object successfully created",
        book: book
    };
    // create a response message to confirm code has run
    response.send(successResponse);
    //send the message
})
// .use is a method/function to create a 'route'. When a user makes a requests on this 'route' the code inside
// the function will be run. request and response are normally shortened to req and res but initially
// we will use request and response to help memorise what they mean

app.listen(5001, () => console.log("Server is listening on port 5001"));
// The listen method in Express 'listens in' in a particular port on the server it is run on.
// Ports are a way of spreading incoming and outgoing network traffic on big servers which may be 
// running several different types of server programs simultaneously. 
// See https://www.examcollection.com/certification-training/network-plus-overview-of-common-tcp-and-udp-default-ports.html for more details
// The second parameter is the function that is run when Express starts listening