const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
