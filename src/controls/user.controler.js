import { User } from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";

const addUser = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!(name && email && phone)) {
    res.status(401).json({
      message: "CREDENTIAL IS REQUIRED",
    });
    return;
  }

  const user = await User.create({
    name,
    email,
    phone,
  });

  const createdUser = User.findById(user._id);

  if (!createdUser) {
    console.log(`USER IS NOT CREATED`);
  }

  res.status(201).redirect("/");
});

const getAllUser = expressAsyncHandler(async (req, res) =>{
  const users = await User.find()

  if (!users) {
    res.status(500).json({
      message : "SORRY NO DATA FOUND"
    })
    return
  }

  res
  .status(200)
  .render('index', {users : users})
});


const updateUser = expressAsyncHandler(async (req, res)=>{
  const id = req.params.id
  
  const {name, email, phone} = req.body
  await User.updateOne({_id : id}, {
    $set : {
      name, email, phone

    }
  })
  res.redirect('/')
})

const populateUpdateTable = expressAsyncHandler(async (req, res) => {
  const id = req.params.id
  const user = await User.findById(id)
  console.log(user);
  res.render('adduser', {link : `update/${id}`, user}, )
})


const deleteUser = expressAsyncHandler(async (req, res) =>{
  const _id = req.params.id
  await User.deleteOne({_id : _id}) 
  res.redirect('/')
})


export { addUser, getAllUser, deleteUser, updateUser, populateUpdateTable };
