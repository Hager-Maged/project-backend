const bugs = require('../../model/bug')

const get_one_categories =async (req,res)=>{
    try{
      const one_bug = await bugs.findById(req.params.id);
      res.status(201).json({
        status:201,
        bugs:one_bug
      })
    }catch(err){
        res.status(400).json({
            status: 400,
            error : err.message
        })
    }
}
module.exports=get_one_categories