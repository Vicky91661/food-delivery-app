
export const isAuthenticated=(req,res,next)=>{
    const token  = req.cookies["connect.sid"];
    if(!token){
       return res.status(401).json({
            message:"Not logged in"
        })
    }
    next()
}

export const authorizeAdmin =(req,res,next)=>{
    if(!req.user.role!=="admin"){
       return res.status(405).json({
            message:"Only Admin is Allowed"
        })
    }
    next()
}