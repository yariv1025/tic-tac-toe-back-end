module.exports = (app) => {
    const schema = require('../controllers/ScoreBoard.controller.js');

    // Create a score obj
    app.post('/score-board', schema.create);

    // Retrieve all score boards
    app.get('/score-board/retrieve', schema.findAll);

    // // Retrieve a single score board with score board Id
    // app.get('/Score board/:Score-board-id', schema.findOne);

    // // Update a score board with noteId
    // app.put('/notes/:Score-board-id', schema.update);

    // // Delete a score board with noteId
    // app.delete('/notes/:Score-board-id', schema.delete);
}
