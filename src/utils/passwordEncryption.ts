import bcrypt from 'bcryptjs';

const saltRounds = 10;

export async function encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
        return await bcrypt.compare(password, hash);
    } catch (e) {
        return false;
    }
}

// testEncryption();
