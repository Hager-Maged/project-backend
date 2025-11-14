const bugs = require('../../model/bug')

const get_all_categories =async (req,res)=>{
    try{
      const all_bugs = await bugs.find({});
      res.status(201).json({
        status:201,
        bugs:all_bugs
      })
    }catch(err){
        res.status(400).json({
            status: 400,
            error : err.message
        })
    }
}
module.exports=get_all_categories