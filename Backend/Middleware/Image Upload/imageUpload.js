const fs = require("fs");
const multer = require('multer')
const storage = multer.diskStorage({
    destination:'uploads/',
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})
const upload = multer({storage})

//CLOUDINARY
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})

const imgUpload = (req,res,next)=>{
    upload.single('image')(req,res,async(err)=>{
        if(err){
            return res.status(400).json({message:err.message})
        }
        console.log(req.file)
        if(req.file){
            
       
        try{
            const result = await cloudinary.uploader.upload(req.file.path,{
                folder:"Ecommerce-images"     //folder name
            })
            // console.log('Cloudinary Upload Result:', result); 
            req.body.image = result.secure_url;  //HERE WE PASSING THE IMAGE URL INTO {image} = req.body
          
            fs.unlink(req.file.path,(error)=>{
            if(error){
                console.log(error.message)
            }
           })
            next();

        }
        catch(error){
            return res.status(500).json({message:"Error uploading file to Cloudinary"})

        }
    }
    else{
        next();
    }

    })
}
module.exports = imgUpload