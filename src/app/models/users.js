const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const users = new Schema({
    username: { type: String, default: '', unique: true, required: true},
    email: { type: String, default: ''},
    password: { type: String, default: '', required: true},
    phone: { type: String, default: ''},
    fullname: { type: String, default: ''},
    address: { type: String, default: ''},
    roles: {type: Boolean, default: false},
    avatar: {type: String, default:'uploads/th.jpg'},
    deleteAt: { type: Date, default: Date.now},
    action: { type: String, default: 'System'},
      
  }, 
  { 
    collection: 'users' ,
    timestamps: true,
  })


  module.exports = mongoose.model('users', users);