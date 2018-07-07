const Note = require('../../models/mysql/note');

module.exports = function (note, comments, id, id_provider, loan_id) {
	
    if (!note) {
        return Promise.reject(new Error('note is required'));
    }
    if (!comments) {
        return Promise.reject(new Error('comments is required'));
    }
    if (!loan_id) {
        return Promise.reject(new Error('loan id is required'));
    }

    const newNote = {
        note: note,
        comments: comments,
		user_requester_id: id,
		user_provider_id: id_provider,
        loan_id: loan_id
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
