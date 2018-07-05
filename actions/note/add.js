const config = require('../../config');
const NoteController = require('../../controllers/note');

module.exports = function(req, res) {
	const id = req.user.id;
    if (!req.body.note) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "Missing note",
            success: false
        })
    }
	
	  if (!req.body.comments) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "Missing comments",
            success: false
        })
    }
	
	if (!req.body.user_id) {
        res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "Missing the user id",
            success: false
        })
    }

    const note = req.body.note;
    const comments = req.body.comments;
	const id_provider = req.body.user_id


    NoteController.add(note, comments, id, id_provider)
        .then((note) => {
        res
        .status(config.constants.OK)
        .json({
            note,
            success: true
        });
        })
        .catch((err) => {
            res
            .status(config.constants.BAD_REQUEST)
            .json({
                message:err.message || err,
                success: false
            });
        });
};
