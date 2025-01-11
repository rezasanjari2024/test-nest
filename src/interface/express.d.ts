import { RequestUser } from "./RequestUser";


declare global {
  namespace Express {
    interface Request {
      user?: RequestUser; // کاربر ممکن است وجود نداشته باشد (برای حالت‌های غیر احراز هویت)
    }
  }
}
