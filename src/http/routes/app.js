'use strict'

module.exports = (router, ctrl) => {
    router.get('/', ctrl.index)

    return router
}