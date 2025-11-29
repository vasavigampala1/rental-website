const User=require("../models/user.js");

module.exports.signupForm=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signupUser=async (req,res)=>{
    try{
         let {username,email,password}=req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
        req.flash("success","User registered Successfully");
        res.redirect("/listing");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
   
};
module.exports.getUserLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.loginUser=async (req,res)=>{
    req.flash("success","Welcome to back to WanderLust");
    let redirectUrl=res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
};

module.exports.logoutUser=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listing");
    })
};