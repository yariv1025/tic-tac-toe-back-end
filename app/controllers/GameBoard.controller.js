const GameBoardSchema = require('../models/GameBoard.model.js');

// Create and Save a new schema
exports.create = (req, res) => {
    // Validate request
    if (!req.body.board) {
        return res.status(400).send({
            message: "GameBoardSchema can not be empty"
        });
    }

    // Create a score schema
    const schema = new GameBoardSchema({
        board: req.body.board
    });

    // Save ScoreSchema in the database
    schema.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the" +
                " score schema."
        });
    });
};
