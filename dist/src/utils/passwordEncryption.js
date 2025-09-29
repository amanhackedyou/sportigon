import bcrypt from 'bcryptjs';
const saltRounds = 10;
export async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
}
export async function verifyPassword(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    }
    catch (e) {
        return false;
    }
}
// testEncryption();
//# sourceMappingURL=passwordEncryption.js.map