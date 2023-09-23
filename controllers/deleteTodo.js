const Todo=require("../models/TODO")

exports.deleteTodo =async(req,res)=>{
    try{
             const{id}=req.params;
             


             await Todo.findByIdAndDelete(id);

             res.json({
                success:true,
                message:"TodoDeleted" ,
             })
        

    }
    catch(err){

        console.error(err);
                    console.log(err);
                    res.status(500)
                    .json({
                        success:false,
                        error:err.message,
                        message:"Server Error",
                    });
                    
                 
}

}