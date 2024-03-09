const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to FitTrackPro! Our comprehensive fitness tracking application offers personalized workout plans, nutritional guidance, and progress monitoring.');
});

// Define route for the workout plans page
app.get('/workout-plans', (req, res) => {
  res.send('Get personalized workout plans that cater to your fitness goals and fitness level, and track your progress with our progress monitoring tools.');
});

// Define route for the nutritional guidance page
app.get('/nutrition', (req, res) => {
  res.send('Get nutritional guidance and personalized meal plans that cater to your dietary preferences and fitness goals.');
});

// Define route for the progress monitoring page
app.get('/progress-monitoring', (req, res) => {
  res.send('Monitor your progress and track your fitness journey with our easy-to-use progress monitoring tools.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});