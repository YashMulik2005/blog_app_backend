const express = require("express");
const usermodel=require("../Models/User")
const bcrypt=require("bcrypt");

const router = express.Router();




// create user bhaicyyy
router.post('/register', async (req,res)=>{
    try {
        const { username, email, password ,name} = req.body;

        if (!username || !email || !password  || !name)

            return res.status(400).send({
                success: false, message: "all fields required "
            })

        //existing user
        const exuser =  await usermodel.findOne({ email })

        if (exuser) {
            return res.status(401).send({
                success: false, message: "user already exist"
            });
         }
           //hashed the password with bcrypt

         const hashedPassword =  await bcrypt.hash(password, 10);


        
        //user save 
        const user = new usermodel({ username, email, password: hashedPassword,name});
        await user.save();
        return res.status(201).send({
            success: true,
            message: "user craeted",
            user
        })


    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "hii",
            success: false,
            error
        })
    }
}

);

//LOGIN || POST
router.post('/login', async (req,res)=>{
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
          return res.status(401).send({
            success: false,
            message: "Please provide email or password",
          });
        }
        const user =  await usermodel.findOne({ email });
        if (!user) {
          return res.status(200).send({
            success: false,
            message: "email is not registerd",
          });
        }
        //password
        const isMatch =  bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).send({
            success: false,
            message: "Invlid username or password",
          });
        }
        return res.status(200).send({
          success: true,
          messgae: "login successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Error In Login Callcback",
          error,
        });
      }
    }
  
);

module.exports = router;