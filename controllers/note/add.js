const Note = require('../../models/mysql/note');

module.exports = function (note, comments) {
    if (!note) {
        return Promise.reject(new Error('note is required'));
    }
    if (!comments) {
        return Promise.reject(new Error('comments is required'));
    }

    const newNote = {
        note: note,
        comments: comments
    };

    return Note.create(newNote)
        .then(handleNoteResponse);

    function handleNoteResponse(note) {
        if (!note) {
            return Promise.reject(new Error("Couldn't add note"));
        } else {
            return note;
        }

    }
}
