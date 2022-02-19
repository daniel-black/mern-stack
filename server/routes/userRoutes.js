const express = require('express');
const router = express.Router();
const { registerUser, LoginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', LoginUser);

// protect validates the jwt and attaches the user to the req object within req-res cycle
router.get('/me', protect, getMe);  

module.exports = router;