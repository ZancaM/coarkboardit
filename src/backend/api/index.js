import Router from 'express-promise-router';
import hello from './modules/hello';

const router = Router();

router.use('/hello', hello);
router.use('*', (req, res) => {
    res.status(404).json({ message: 'not found' });
});

export default router;
