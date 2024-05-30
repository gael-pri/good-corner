import express from "express";
import adsRoutes from "./ads.routes";

const router = express.Router();

router.use('/ads', adsRoutes);

router.get('/', (req, res) => {
    console.log('Mon index');
    res.send('Hello');
})

export default router;