// define the route for the calls like get, post, put, delete
//GET http://127.0.0.1:8080/ideaApp/v1/ideas (URI)
const ideaController = require('../controllers/idea.controller');

module.exports = (app) => {
  console.log(ideaController);
  // read all idea
  app.get('/ideaApp/v1/ideas', ideaController.fetchAllIdea);
  //crearte idea
  app.post('/ideaApp/v1/ideas', ideaController.createIdea);
  //update idea
  app.put('/ideaApp/v1/ideas/:id', ideaController.updateIdea);
  //delete idea
  app.delete('/ideaApp/v1/ideas/:id', ideaController.deleteIdea);
};
