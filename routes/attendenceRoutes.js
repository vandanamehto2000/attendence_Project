const {markAttendance, getAttendance, updateAttendance} = require ('../controllers/attendenceControllers.js');

const express = require ('express');
const router = express.Router ();

router.post('/mark-attendance', markAttendance);
router.get('/allAttendance', getAttendance);
router.put('/update-attendance/:id', updateAttendance);

module.exports = router;
