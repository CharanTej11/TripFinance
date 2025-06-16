import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config(); 
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await  bcrypt.hash(password, salt);
  return hash;
};
const verifyPassword = (password,hash)=>{
  return  bcrypt.compareSync(password, hash)
}
export  {hashPassword,verifyPassword};


