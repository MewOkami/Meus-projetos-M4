import { handleErrors } from "./handleErrors.middlewares";
import { idExists } from "./idExists.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import validateBody from "./validateBody.middlewares";
import verifyToken from "./verifyToken.middlewares";
import verifyUserPermission from "./verifyUserPermission.middlewares";
import { courseidExists } from "./courseIdExists.middlewares";
import { useridExists } from "./userIdExists.middlewares";

export default {
  handleErrors,
  idExists,
  uniqueEmail,
  validateBody,
  verifyToken,
  verifyUserPermission,
  courseidExists,
  useridExists,
};
