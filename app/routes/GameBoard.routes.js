module.exports = (app) => {
    const schema = require('../controllers/GameBoard.controller.js');

    // Create a game board obj
    app.post('/game-board', schema.create);

    // Retrieve all game-board
    app.get('/game-board/retrieve', schema.findAll);

    // Update a score board with noteId
    app.put('/game-board/update', schema.update);


}
