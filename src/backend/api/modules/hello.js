import Router from 'express-promise-router';
import { query } from '~/db';

const router = Router();

router.get('/', async (req, res) => {
    const time = await query('SELECT NOW()');

    res.json({
        message: 'hello world',
        time: time.rows[0].now
    });
});

export default router;
