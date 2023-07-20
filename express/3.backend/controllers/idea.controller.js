//search all idea
const ideas = require('../models/idea.model');
console.log(ideas);
exports.fetchAllIdea = (req, res) => {
  res.status(200).send(ideas);
};

// create new idea

let idCount = 1;

exports.createIdea = (req, res) => {
  //read the request body
  const idea = req.body;
  // creare new id
  idea.id = ++idCount;

  // save the idea to existing list of idea
  ideas[idCount] = idea;

  res.status(200).send(ideas[idCount]);
};

//update idea
exports.updateIdea = (req, res) => {
  // get the id
  const ideaId = req.params.id;

  // if the idea is present the midify else return error message
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({ message: 'idea id passed was not correct' });
  }
};

//delete idea

exports.deleteIdea = (req, res) => {
  // check if idea present, delete else return error message

  if (req.params.id) {
    delete ideas[req.params.id];
    res.status(200).send({ message: 'sucessfully deleted' });
  } else {
    res.status(400).send({ message: 'wrong idea id' });
  }
};
