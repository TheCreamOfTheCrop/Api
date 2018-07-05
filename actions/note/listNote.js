const noteController = require('../../controllers/note');
const config = require('../../config');

module.exports = function(req, res) {

    if (!req.body.user_id) {
        return res
        .status(config.constants.BAD_REQUEST)
        .json({
            message: "user id is required",
            success: false
        })
    }

    const user_id = req.body.user_id;

    noteController.listNote(user_id)
    .then((note) => {
        res
        .status(config.constants.OK)
        .json({
            note: note,
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
