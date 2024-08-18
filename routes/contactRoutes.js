const express = require("express");
const router = express.Router();

// Get all contacts
router.route("/").get((req, res)=>{
    res.status(200).json({
        message: "Get all Contacts"
    });
});

// Create a new contact
router.route("/").post((req, res)=>{
    res.status(200).json({
        message: "Create Contact"
    });
});

// Get a specific contact by ID
router.route("/:id").get((req, res)=>{
    res.status(200).json({
        message: `Get Contact for ${req.params.id}`
    });
});

// Update a specific contact by ID
router.route("/:id").put((req, res)=>{
    res.status(200).json({
        message: `Update Contact for ${req.params.id}`
    });
});

// Delete a specific contact by ID
router.route("/:id").delete((req, res)=>{
    res.status(200).json({
        message: `Delete Contact for ${req.params.id}`
    });
});

module.exports = router;
