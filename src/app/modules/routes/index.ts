import express from 'express';
import { AuthRoutes } from '../authentication';
import { NotesRoute } from '../notes';



const router = express.Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/notes',
    route: NotesRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
