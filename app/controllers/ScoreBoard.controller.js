const ScoreBoardSchema = require('../models/ScoreBoard.model.js');

// Create and Save a new schema
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "ScoreBoardSchema can not be empty"
        });
    }

    // Create a score schema
    const schema = new ScoreBoardSchema({
        oWon: req.body.oWon,
        xWon: req.body.xWon,
        tie: req.body.tie,
        previousGameWinner: req.body.previousGameWinner,
        wasPrevGame: req.body.wasPrevGame
    });

    // Save ScoreBoardSchema in the database
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

// Retrieve and return score schema from the database.
exports.findAll = (req, res) => {
    ScoreBoardSchema.find()
        .then(items => {
            console.log(`Successfully found ${items.length} documents.`)
            res.send(items);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving score schema."
        });
    });
};

// // Find a single score board with a score board Id
// exports.findOne = (req, res) => {
//     ScoreBoardSchema.findById(req.params._Id)
//         .then(item => {
//             if (!item) {
//                 return res.status(404).send({
//                     message: "score board not found with id " +
//                     req.params._Id
//                 });
//             }
//             res.send(item);
//         }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "score board not found with id " + req.params._Id
//             });
//         }
//         return res.status(500).send({
//             message: "Error retrieving score board with id " + req.params._Id
//         });
//     });
// };

// // Update a score board identified by the score board Id in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         return res.status(400).send({
//             message: "Score board content can not be empty"
//         });
//     }
//
//     // Find score board and update it with the request body
//     ScoreBoardSchema.findByIdAndUpdate(req.params._Id, {
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     }, {new: true})
//         .then(item => {
//             if (!item) {
//                 return res.status(404).send({
//                     message: "Score board not found with id " + req.params._Id
//                 });
//             }
//             res.send(item);
//         }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Score board not found with id " + req.params._Id
//             });
//         }
//         return res.status(500).send({
//             message: "Error updating score board with id " + req.params._Id
//         });
//     });
// };

// // Delete a score board with the specified score board Id in the request
// exports.delete = (req, res) => {
//     ScoreBoardSchema.findByIdAndRemove(req.params._id)
//         .then(item => {
//             if (!item) {
//                 return res.status(404).send({
//                     message: "Score board not found with id " + req.params._Id
//                 });
//             }
//             res.send({message: "Score board deleted successfully!"});
//         }).catch(err => {
//         if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//             return res.status(404).send({
//                 message: "Score board not found with id " + req.params._Id
//             });
//         }
//         return res.status(500).send({
//             message: "Could not delete Score board with id " + req.params._Id
//         });
//     });
// };
