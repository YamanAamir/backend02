import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {

        app.on("err", (err) => {
            console.log("Err", err);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is Running at port :${process.env.PORT}`)
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err)
    });














/*
Second Approch

import express from 'express'

const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERR: ", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })

        } catch (error) {
            console.log("Error", error)
            throw error
        }
    })()
        */