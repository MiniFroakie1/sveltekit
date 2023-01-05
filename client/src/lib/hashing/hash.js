import bcrypt from 'bcrypt';

const saltRounds = 10;

export const compare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

export const hash = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}
