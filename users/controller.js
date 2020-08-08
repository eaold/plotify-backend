const router = require("express").Router();
const User = require("./model");


// Get user by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).exec();
  res.status(200).json(user);
});

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find({}).exec();
  res.status(200).json(users);
});

// Post a new user or update a user.
router.post("/", async (req, res) => {
  const userToUpdate = req.body;
    console.log(userToUpdate);
  const updatedUser = await User.findOneAndUpdate(
    {
      display_name: userToUpdate.display_name,
    },
    {
      display_name: userToUpdate.display_name,
      email: userToUpdate.email,
      href: userToUpdate.href,
      image: userToUpdate.image
    },
    { upsert: true, new: true }
  ).exec();
  res.status(201).json(updatedUser);
});

// Delete a user
router.delete('/:id', async (req,res) => {
    const id = req.params.id;
    console.log(id);
    const userRemoved = await User.findByIdAndRemove(id);
    res.status(200).json(userRemoved);
})

module.exports = router;