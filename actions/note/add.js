const config = require('../../config');
const NoteController = require('../../controllers/note');

module.exports = function(req, res) {
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

    const note = req.body.note;
    const comments = req.body.comments;


    RefundController.add(note, comments)
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
