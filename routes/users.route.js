const express = require('express');
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/users.controller');
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser)
router.post("/", createUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router;