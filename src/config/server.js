'use strict'

module.exports = {
    app: {
        ip: process.env.APP_IP || '127.0.0.1',
        port: process.env.APP_PORT,
        domain: process.env.APP_DOMAIN
    }
}