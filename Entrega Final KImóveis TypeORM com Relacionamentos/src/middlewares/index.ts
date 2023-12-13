import { handleError } from "./handleErrors.middlewares";
import { idExists } from "./idExists.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { isAdmin } from "./isAdmin.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { categoryId } from "./categoryId.middlewares";
import { uniqueCategory } from "./uniqueCategory.middlewares";
import { validateBody } from "./validateBody.middlewares";

export default {
  handleError,
  idExists,
  verifyToken,
  isAdmin,
  uniqueEmail,
  categoryId,
  uniqueCategory,
  validateBody,
};
