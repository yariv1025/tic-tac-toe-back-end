const GameBoardSchema = require('../models/GameBoard.model.js');

// Create and Save a new schema
exports.create = (req, res) => {
    // Validate request
    if (!req.body.board) {
        return res.status(400).send({
            message: "GameBoardSchema can not be empty"
        });
    }

    // Create a game board schema
    const schema = new GameBoardSchema({
        board: req.body.board
    });

    // Save gameBoardSchema in the database
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

// Retrieve and return game board schema from the database.
exports.findAll = (req, res) => {
    GameBoardSchema.find()
        .then(items => {
            console.log(`Successfully found ${items.length} documents.`)
            res.send(items);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving" +
                " game board schema."
        });
    });
};

// Update a game board identified by the game board Id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body._Id) {
        return res.status(400).send({
            message: "Game board content can not be empty"
        });
    }

    // Find game board and update it with the request body
    GameBoardSchema.findByIdAndUpdate(req.body._Id, {
        _id: req.body.id
    }, {new: true})
        .then(item => {
            if (!item) {
                return res.status(404).send({
                    message: "Game board not found with id " + req.body._Id
                });
            }
            res.send(item);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Game board not found with id " + req.body._Id
            });
        }
        return res.status(500).send({
            message: "Error updating Game board with id " + req.body._Id
        });
    });
};
