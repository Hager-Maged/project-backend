const bug = require("../../model/bug")

const update_bug = async (req, res) => {
  try {
    bug.findOneAndUpdate({ _id : req.params._id } , {state : "solved"})
    const message = {
        status : 201 , 
        message : "Bug State Updated Successfully",
    }
    res.status(201).json(message);
} catch (err) {
    const message = { 
        status : 500,
        message : err.message,
    }
    res.status(500).json(message);
  }
};
module.exports = update_bug;
