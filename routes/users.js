const express=require('express')
const router=express.Router()
const User=require('../models/users')

router.get('/',async(req,res)=>{
    try {
        const users=await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    

})
router.get('/:id',getUsers, (req,res)=>{
    res.json(res.user)

})
router.post('/',async (req,res)=>{
    const user=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        dateofbirth:req.body.dateofbirth,
        age:req.body.age,
        address:req.body.address,
        pincode:req.body.pincode

    })
    try {
        const newUser=await user.save()
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
})


router.patch('/:id',getUsers,async(req,res)=>{
    if(req.body.firstname!=null){
        res.user.firstname=req.body.firstname
    }
    if(req.body.lastname!=null){
        res.user.lastname=req.body.lastname
    }
    if(req.body.dateofbirth!=null){
        res.user.dateofbirth=req.body.dateofbirth
    }
    if(req.body.age!=null){
        res.user.age=req.body.age
    }
    if(req.body.address!=null){
        res.user.address=req.body.address
    }
    if(req.body.pincode!=null){
        res.user.pincode=req.body.pincode
    }
   
    try {
        const updatedUser=await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
})

router.delete('/:id',getUsers,async(req,res)=>{
    try {
        await res.user.remove()
        res.json({message:"User data deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})

async function getUsers(req,res,next){
    let user
try {
    user=await User.findById(req.params.id)
    if(user==null){
        return res.status(404).json({message:'Cannot find user'})
    }
} catch (error) {
    return res.status(500).json({message:error.messsage})
}
res.user=user
next()
}


module.exports=router