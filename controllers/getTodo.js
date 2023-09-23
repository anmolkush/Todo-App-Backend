const Todo=require("../models/TODO")

exports.getTodo =async(req,res)=>{
    try{

            const todos =await Todo.find({});
            res.status(200).json({
                success:true,
                data:todos,
                message:'Enire Todo Data Fetched'
            });

    
        }

    
    catch(err){

        console.error(err);
                    console.log(err);
                    res.status(500)
                    .json({
                        success:false,
                        data:"Server Error",
                        message:err.message,
                    });
                    
    }

}



exports.getTodoById =async (req,res)=>{
    try{
        const id=req.params.id;

        const todo =await Todo.findById({_id:id});

        if (!todo)
        {
            return res.status(200).json({
                success:False,
                message:'No data is found with id',
            });
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo  ${id} data is successfully fetched` ,
        });
        


    }


catch(err){

    console.error(err);
                console.log(err);
                res.status(500)
                .json({
                    success:false,
                    data:"Server Error",
                    message:err.message,
                });
                
}


}