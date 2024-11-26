const express = require('express')
const { getBlog, create } = require('../controller/blogController')
const { auth } = require('../middleware/auth')

const router = express.Router()

router.get('/', getBlog)

router.post('/create', auth, create)


module.exports = router