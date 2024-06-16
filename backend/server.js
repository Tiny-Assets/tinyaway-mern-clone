import './database.js'; 
import express from 'express'; 
import cors from 'cors'; 
import { testFxn } from './controllers/sampleController.js';

const app = express(); 
const PORT = process.env.PORT || 4000; 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Port Listening 
app.listen(PORT, () => {
  console.log(`Running port: ${PORT}`); 
})

// Routes
app.get('/', (req, res) => {
  res.send('Testing Now'); 
}); 

// Testing Function
app.get('/api/test', async (req, res) => {
  try {
    const result = await testFxn();
    // Ensure to send the result as JSON
    res.json(result);
} catch (error) {
    // Handle errors appropriately
    console.error(error);
    res.status(500).send('An error occurred');
}
});