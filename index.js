const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON (optional)
app.use(express.json());

// API Endpoint
app.get('/', (req, res) => {
  res.send('Hello, World! Your Node.js project is running!');
});

// Simulate an asynchronous background task
app.post('/run-task', (req, res) => {
  const { task } = req.body;

  // Call the async function without blocking the response
  processAsyncTask(task);

  res.status(200).send({ message: 'Task started, processing in the background.' });
});

// Async Function
async function processAsyncTask(task) {
  console.log(`Processing task: ${task}`);
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay
  console.log(`Task "${task}" completed.`);
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
