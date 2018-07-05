const Note = require('../../models/mysql/note');

module.exports = function (note, comments, id, id_provider) {
	
    if (!note) {
        return Promise.reject(new Error('note is required'));
    }
    if (!comments) {
        return Promise.reject(new Error('comments is required'));
    }

    const newNote = {
        note: note,
        comments: comments,
		user_requester_id: id,
		user_provider_id: id_provider
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
