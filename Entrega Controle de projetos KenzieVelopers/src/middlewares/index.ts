import { handleErrors } from "./handleErrors.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { DeveloperInfosExists } from "./uniqueDevelopersInfo.middlewares";
import { ProjectsIdExists } from "./projectsIdExists.middlewares";
import { idExists } from "./idExists.middlewares";

export default {
  uniqueEmail,
  handleErrors,
  DeveloperInfosExists,
  ProjectsIdExists,
  idExists,
};
