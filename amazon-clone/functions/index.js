const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HSnSfCCvcALwr6dOwX6uiLNI8CMt7FUslHz7kZKsHHM4pmFFi0n0C34zhEXJwKb0FWnndvszP9Qp1JRffFwAy1D00fTmDONkv")

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    
    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);


 // example end point

//  http://localhost:5001/challene-ec662/us-central1/api   


