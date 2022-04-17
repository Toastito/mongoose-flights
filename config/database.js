const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

console.log('Connecting to Database...');

db.on('connected', () => console.log(`Connected to ${db.name} at ${db.host}:${db.port}`));