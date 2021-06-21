import express, { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  return res.json({ msg: 'return from ping route' });
});

export default router;