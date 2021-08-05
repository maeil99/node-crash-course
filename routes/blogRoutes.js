const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

//blog routes

//default page
router.get("/", blogController.blog_index);

//create page
router.get("/create", blogController.blog_create_get);

//POST method
router.post("/", blogController.blog_create_post);

//details page
router.get("/:id", blogController.blog_details);

//DELETE method
router.delete("/:id", blogController.blog_delete);

module.exports = router;
