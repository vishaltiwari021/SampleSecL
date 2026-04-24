const validate = (schema)=>{
    return(req,res,next)=>{
        const{error} = schema.validate(req.body);
        // console.log(error)
        if(error){
            
            const errorMessage = error.details.map((err)=>({
               
                field:err.path.join(","),
                message:err.message
            }));
            return res.status(400).json({
                success:false,
                errors:errorMessage,
            })
        }
        //  return res.status(400).json({
        //         success:false,
        //         errors:errorMessage,
        // })

        // proceed when validation passes
        return next();
    }
}
module.exports = validate;