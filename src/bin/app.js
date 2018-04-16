'use strict'

const path = require('path')

require('dotenv').config({
    path: path.resolve(__dirname + '../../.env')
})

require('./../server/apps/app')()