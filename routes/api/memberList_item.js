const { Router } = require("express");
const Member_item = require("../../models/member_list");
console.log(Member_item);
router = Router();

//get all
router.get("/", async (req, res) => {
  try {
    const member_item = await Member_item.find();
    res.json(member_item);
  } catch (err) {
    res.status(500).json({ message: err.message + " 1" });
  }
});

//get 1
router.get("/:id", getMember, (req, res) => {
  res.json(res.member_item);
});

// Creating one
router.post("/", async (req, res) => {
  const member_item = new Member_item({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const newmember_item = await member_item.save();
    res.status(201).json(newmember_item);
  } catch (err) {
    res.status(400).json({ message: err.message + " 2" });
  }
});

// Updating One
router.patch("/:id", getMember, async (req, res) => {
  if (req.body.username != null) {
    res.member_item.username = req.body.username;
  }
  if (req.body.password != null) {
    res.member_item.password = req.body.password;
  }
  try {
    const updateMember = await res.member_item.save();
    res.json(updateMember);
  } catch (err) {
    res.status(400).json({ message: err.message + " 3" });
  }
});

// Deleting One
router.delete("/:id", getMember, async (req, res) => {
  try {
    await res.member_item.remove();
    res.json({ message: "Deleted member_item" });
  } catch (err) {
    res.status(500).json({ message: err.message + " 4" });
  }
});

//////////////////////
async function getMember(req, res, next) {
  let member_item;
  try {
    member_item = await Member_item.findById(req.params.id);
    if (member_item == null) {
      return res.status(404).json({ message: "Cannot find member" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message + " 5" });
  }

  res.member_item = member_item;
  next();
}

module.exports = router;
