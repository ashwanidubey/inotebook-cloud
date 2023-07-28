const express=require('express');
const router=express();

router.use('/v1/auth',require('./Auth.js'))
router.use('/v1/note',require('./Note.js'))

module.exports = router ;