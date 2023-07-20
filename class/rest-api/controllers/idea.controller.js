//get all idea / find all idea
const ideas = require('../models/idea.model');

const findAllIdeas = (req, res) => {
  res.status(200).send(ideas);
};

// add idea
let idCount = 1;

const createIdea = (req, res) => {
  // read the idea
  const idea = req.body;
  // generate id
  idea.id = ++idCount;
  //save it in your object
  ideas[idCount] = idea;

  //return response

  res.status(200).send(ideas[idCount]);
};

// update idea

const updateIdea = (req, res) => {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    ideas[ideaId] = req.body;
    res.status(200).send({ message: 'idea updated' });
  } else {
    res.status(400).send({ message: 'no such id' });
  }
};

const deleteIdea = (req, res) => {
  const ideaId = req.params.id;
  if (ideas[ideaId]) {
    delete ideas[ideaId];
    res.status(200).send({ message: 'idea deleted' });
  } else {
    res.status(400).send({ message: 'no such id, try different id' });
  }
};

// delete idea

module.exports = { findAllIdeas, createIdea, updateIdea, deleteIdea };
