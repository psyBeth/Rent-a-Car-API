"use strict"
/* ---------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {

        return next()

        if (req.user) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    isStaffOrisAdmin: (req, res, next) => {

        return next()

        if (req.user && (req.user.isAdmin || req.user.isStaff)) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
        }
    },

    isAdmin: (req, res, next) => {

        return next()

        if (req.user && req.user.isAdmin) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
        }
    },
};