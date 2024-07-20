/*
const express = require('express');
const { getStundents } = require('../controllers/studentsController');

// route object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get('/getall', getStundents);

module.exports = router; 

*/

//****************************************************************************************
//****************************************************************************************
//****************************************************************************************

const express = require('express');

const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentsController');

const router = express.Router();

// GET all students
router.get('/getall', getStudents);

// GET a student by ID
router.get('/:id', getStudentById);

// POST a new student
router.post('/create', createStudent);

// PUT to update a student
router.put('/:id', updateStudent);

// DELETE a student
router.delete('/:id', deleteStudent);

module.exports = router;
