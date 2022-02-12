const router = require('express')();
const taskRouter = require('./task');

router.use('/tasks', taskRouter);

module.exports = router;