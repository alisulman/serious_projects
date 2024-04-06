import bcrypt from 'bcryptjs'

const ComparePassword = async (password, hashedPassword) => {
    const dcryptPass = await bcrypt.compare(password, hashedPassword)
    return dcryptPass
}

export default ComparePassword