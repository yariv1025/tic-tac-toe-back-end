const mongoose = require('mongoose');

const ScoreSchema = mongoose.Schema({
    oWon: 0,
    xWon: 0,
    tie: 0,
    previousGameWinner: "",
    wasPrevGame: false
}, {
    timestamps: true
});

module.exports = mongoose.model('Score', ScoreSchema);
