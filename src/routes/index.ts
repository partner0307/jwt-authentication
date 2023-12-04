import { Router } from 'express';
import user from './user';

const routes = Router();
// All user operations will be available under the "users" route prefix.
routes.use('/users', user);
// Allow our router to be used outside of this file.
export default routes;