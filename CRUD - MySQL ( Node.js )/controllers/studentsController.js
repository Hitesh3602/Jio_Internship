/*

const db = require("../config/db");

// GET ALL STUDENTS LIST
const getStundents = async (request, response) => {
    console.log("inside ")
    try{
        const [data] = await db.query('SELECT * FROM students')
        console.log(data);

        if(!data || data.length === 0)
        {
            return response.status(404).send({
                success: false,
                message: 'NO RECORD FOUND'
            })
        }
        response.status(200).send({
            success: true,
            message: 'ALL STUDENTS RECORD',
            data
        })
    }
    catch(error){
        console.log(error)
        response.status(500).send({
            success: false,
            message: 'ERROR IN GET ALL STUDENTS API',
            error
        })
    }
}

module.exports = { getStundents };

*/


//****************************************************************************************
//****************************************************************************************
//****************************************************************************************


const pool = require("../config/db");

// Get all students
const getStudents = (req, res) => {
  pool.query('SELECT * FROM students', (error, results) => {
    if (error) {
      return res.status(500).send({ error: error.message });
    }
    res.status(200).send(results);
  });
};

// Get a student by ID
const getStudentById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM students WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Create a new student
const createStudent = (req, res) => {
    const { name, roll_no, fees, class: className, medium } = req.body;
    pool.query(
      'INSERT INTO students (name, roll_no, fees, class, medium) VALUES (?, ?, ?, ?, ?)',
      [name, roll_no, fees, className, medium],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ 
          id: results.insertId,
          name, 
          roll_no, 
          fees, 
          class: className, 
          medium 
        });
      }
    );
  };

// Update a student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, age, grade } = req.body;
  pool.query('UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?', [name, age, grade, id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully' });
  });
};

// Delete a student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM students WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
