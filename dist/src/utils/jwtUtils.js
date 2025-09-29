import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "jaanap";
export function generateJWToken(payload) {
    return jwt.sign(payload, JWT_SECRET); // No expiresIn → token never expires
}
export function verifyJWToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (error) {
        return null;
    }
}
//# sourceMappingURL=jwtUtils.js.map