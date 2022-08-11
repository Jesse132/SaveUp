/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const express = require('express');
const cors = require('cors');
const controllers = require('./database/controllers.js');

const app = express();
const router = express.Router();

router.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

//users
router.get('/users', controllers.getUsers);
router.post('/users', controllers.createUser);
router.get('/login', controllers.verifyLogin);
router.put('/users', controllers.addFunds);
router.put('/userGoal', controllers.addGoal);
//entries
router.get('/entries', controllers.getEntries);
router.post('/entries', controllers.createEntry);
router.put('/entries', controllers.putEntry);
//work
router.get('/work', controllers.getWork);
router.post('/work', controllers.createWork);
router.put('/work', controllers.putWork);

app.listen(3000);
console.log('Server listening at http://localhost:3000');