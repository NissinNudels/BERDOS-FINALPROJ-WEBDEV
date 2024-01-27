import bcrypt from "bcryptjs";

const users = [
  { 
    name:"Admin",
    email:"admin@gmail.com",
    password: await bcrypt.hashSync("admin123", 10),
    isAdmin: true
  },
  {
    name:"user",
    email:"user@gmail.com",
    password: await bcrypt.hashSync("user123", 10),
  }
];

export default users;