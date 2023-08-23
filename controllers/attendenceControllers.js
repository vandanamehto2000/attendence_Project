const Attendance = require ('../models/attendence');

// Create Mark Attendance
const markAttendance = async (req, res) => {
  try {
    const {employeeId, date, status} = req.body;
    if (!(employeeId && date && status)) {
      return res.status (400).json ({message: 'all input is required'});
    }
    // Check if the employeeId already exists in the database
    const existingAttendance = await Attendance.findOne ({employeeId});
    if (existingAttendance) {
      return res.status (400).json ({error: 'Employee ID already exists'});
    }

    const attendance = new Attendance ({
      employeeId,
      date,
      status,
    });
    const attendanceData = await attendance.save ();
    return res
      .status (201)
      .json ({message: 'Attendance marked successfully', attendanceData});
  } catch (error) {
    return res.status (500).json ({error: 'An error occurred'});
  }
};

// All the attendance data
const getAttendance = async (req, res) => {
  try {
    const attendanceData = await Attendance.find ();
    return res.status (200).json (attendanceData);
  } catch (error) {
    return res.status (500).json ({error: 'An error occurred'});
  }
};

// edit and update particular date attendance(timestamp)

const updateAttendance = async (req, res) => {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const updateAttendence = await Attendance.findByIdAndUpdate (
      id,
      {status},
      {new: true}
    );
    return res
      .status (200)
      .json ({message: 'Attendance updated successfully', updateAttendence});
  } catch (error) {
    return res.status (500).json ({error: 'An error occurred'});
  }
};

module.exports = {
  markAttendance,
  getAttendance,
  updateAttendance,
};
