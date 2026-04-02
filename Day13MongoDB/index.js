//today we learn about the MongoDB
db.users.insertMany([
  {
    "name": "Amit Sharma",
    "age": 22,
    "course": "Computer Science",
    "isActive": true,
    "skills": ["JavaScript", "React", "MongoDB"]
  },
  {
    "name": "Priya Verma",
    "age": 24,
    "course": "Information Technology",
    "isActive": false,
    "skills": ["Python", "Django", "SQL"]
  },
  {
    "name": "Rahul Singh",
    "age": 21,
    "course": "Electronics",
    "isActive": true,
    "skills": ["C++", "Embedded Systems", "MATLAB"]
  },
  {
    "name": "Sneha Patel",
    "age": 23,
    "course": "Data Science",
    "isActive": true,
    "skills": ["R", "Machine Learning", "TensorFlow"]
  },
  {
    "name": "Vikram Joshi",
    "age": 25,
    "course": "Mechanical Engineering",
    "isActive": false,
    "skills": ["AutoCAD", "SolidWorks", "ANSYS"]
  },
  {
    "name": "Ananya Gupta",
    "age": 22,
    "course": "Cyber Security",
    "isActive": true,
    "skills": ["Networking", "Linux", "Penetration Testing"]
  }
])
