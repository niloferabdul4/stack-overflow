import users from "../models/auth.js"

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find()
        const allUsersDetails = []
        allUsers.forEach((user) => {
           allUsersDetails.push({ _id: user._id, name: user.name, about: user.about, tags: user.tags,joinedOn:user.joinedOn })
            
    })

       // console.log(UsersList)
        res.status(200).json(allUsersDetails)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }

}