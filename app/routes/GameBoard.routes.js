module.exports = (app) => {
    const schema = require('../controllers/GameBoard.controller.js');

    // Create a game board obj
    app.post('/game-board', schema.create);

}
