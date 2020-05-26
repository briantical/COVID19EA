import { Router } from 'express';

import twitter_routes from './twitter';
import covid_routes from './covid';

const router = Router();

router.use('/twitter', twitter_routes);
router.use('/covid', covid_routes);

export default router;
