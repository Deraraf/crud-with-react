import {v4 as uuid} from "uuid"

let users = [];

export const getUsers = (req,res) =>{
    res.send(users)
}
export const createUser = (req,res) =>{
    const user = req.body;
    users.push({...user,id:uuid()})
    res.send("user added successfully")
}
export const getUser = (req,res) =>{
    const singleUser = users.filter(user =>user.id === req.params.id);
    res.send(singleUser)
}
export const deleteUser = (req,res) =>{
    users = users.filter(user =>user.id !== req.params.id);
    res.send('user deleted successfully')
}
export const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, contact } = req.body;
  
    const userIndex = users.findIndex(user => user.id === id);
  
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], name, email, contact };
      res.send('User updated successfully');
    } else {
      res.status(404).send('User not found');
    }
  };