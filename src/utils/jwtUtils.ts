import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "jaanap";

export function generateJWToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET); // No expiresIn → token never expires
}

export function verifyJWToken(token: string): string | JwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}