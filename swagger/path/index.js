const { readAll } = require("./shortens/get.swagger");
const { create } = require("./shortens/post.swagger");
const { readByID } = require("./shorten/get.swagger");
const { put } = require("./shorten/put.swagger");

module.exports = {
  readAll,
  readByID,
  create,
  put,
};
