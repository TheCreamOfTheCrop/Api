const Note = require('../../models/mysql/note');

module.exports = function(id){
    let note;
    if (!id) {
        return Promise.reject(new Error('user id is require'));
    }
    return Note.findAll({
        where: {
            user_requester_id: id
        },
    })
    .then(l => note = l)
    .then(handleAcceptResponse)

    function handleAcceptResponse(result) {
        if (result[0] == 0) {
            return Promise.reject(new Error("Can't find marks"));
        } else {
            return result;
        }
    }
}
