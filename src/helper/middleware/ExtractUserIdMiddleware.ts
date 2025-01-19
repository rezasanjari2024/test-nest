import { Request, Response, NextFunction } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        userId?: string;
    }
}
import * as jwt from 'jsonwebtoken';


interface JwtPayload {
    userId: string;
    sub:string;
}

const extractUserIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'reza-sanajir.trader.123456789') as JwtPayload;
        req.userId = decoded.sub;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default extractUserIdMiddleware;