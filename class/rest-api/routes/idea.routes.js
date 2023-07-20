const ideaController = require('../controllers/idea.controller');

module.exports = (app) => {
  app.get('/ideaApp/v1/ideas', ideaController.findAllIdeas);
  app.post('/ideaApp/v1/ideas', ideaController.createIdea);
  app.put('/ideaApp/v1/ideas/:id', ideaController.updateIdea);
  app.delete('/ideaApp/v1/ideas/:id', ideaController.deleteIdea);
};
