const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema;

const UserSchema = new userSchema({
  
      id: {
        type: Number,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: String,
        allowNull: false,
      },

      email: {
        type: String,
        allowNull: false,
        unique: true,
      },

      password: {
        type: String,
        allowNull: false,
      },
    });

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('NO PASSWORD')
    next()
  } else {
    console.log('save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;