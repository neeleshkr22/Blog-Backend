import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    userId?: string;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
    try{
        // Extract token from Authorization header
        const header = req.headers['authorization'];

        // Check if header is present and starts with 'Bearer '
        if(!header || !header.startsWith('Bearer ')){
            return res.status(401).json({message:"unauthorized"});
        }
        // Remove 'Bearer ' prefix to get the token
        const token = header.slice("Bearer".length);
        // Verify the token
        const secret = process.env["JWT_SECRET"] as string;
        if(!secret){
            return res.status(500).json({message : "Internal server error"});
        }

        // Verify token and extract payload
        const payload = jwt.verify(token, secret) as {userId : string};

        // Attach userId to request object
        req.userId = payload.userId;
        // Proceed to the next middleware or route handler
        next();
    }catch(error){
        return res.status(401).json({message:"Invalid token"});
    }
}

export default requireAuth;