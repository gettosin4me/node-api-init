'use strict'

const express = require('express')
const ctrl = require('./../controllers/app')

module.exports = () => {
    let router = express.Router()

    //enable user routes
    require('./app')(router, ctrl)
    
    return router
}