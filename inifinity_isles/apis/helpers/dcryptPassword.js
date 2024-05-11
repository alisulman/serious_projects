import bcrypt from 'bcryptjs'

const dcrryptPassword = async (password, hash) => {
    const decode = await bcrypt.compare(password, hash)
    return decode
}

export default dcrryptPassword;