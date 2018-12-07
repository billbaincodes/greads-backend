const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");

router.get("/", authorsController.getAll);
router.get("/:id", authorsController.getOne)
router.post("/", authorsController.newAuthor);
router.delete("/:id", authorsController.deleteAuthor)
router.put("/:id", authorsController.updateAuthor)

module.exports = router;
