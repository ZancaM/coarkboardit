import express from 'express';
import path from 'path';
import logger from './logger';
import api from './api';

// Create application
const app = express();

// Add middleware
app.use(logger);

// Mount the API router
app.use('/api', api);

// Serve files from the build directory first
app.use(express.static('build'));

// Catch all unmatched routes and send the frontend app to allow for
// client-side routing
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('CorkBoardIt backend listening on port', port);
});
