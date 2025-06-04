const {User} = require("../models")

const GetUserById = async (req,res) => {
  try {
    const user = await User.findById(req.params.user_id)
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send("Error fetching user")
  }
}
const UpdateUser = async (req,res) => {
  try{
    const updated = await User.findByIdAndUpdate(req.params.user_id,
      req.body,
      {new:true}
    )
    res.status(200).send(updated)
  }catch (error){
    res.status(500).send("Error updating user")
  }
}




module.exports = {
  GetUserById,
  UpdateUser
  
}