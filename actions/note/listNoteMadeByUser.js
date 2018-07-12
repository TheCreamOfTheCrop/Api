const noteController = require('../../controllers/note');
const config = require('../../config');

module.exports = function (req, res) {

    const id = req.user.id;

    noteController.listNoteMadeByUser(id)
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
                    message: err.message || err,
                    success: false
                });
        });
};
