const mongoose = require('mongoose');

const GameBoardSchema = mongoose.Schema({
    board: [
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null),
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('board', GameBoardSchema);
