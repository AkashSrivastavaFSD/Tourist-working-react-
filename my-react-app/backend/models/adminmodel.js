
{/*import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

mongoose.connect('mongodb://127.0.0.1:27017/vickytourist');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  pw: {
    type: String,
    required: true,
  },
});

// Hash the password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin; // Export as default for ES module compatibility
*/}