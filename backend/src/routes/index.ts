import express from "express";
import adsRoutes from "./ads.routes";
import categoryRoutes from "./category.routes";

const router = express.Router();

router.use('/ads', adsRoutes);
router.use('/categorie', categoryRoutes);

router.get('/', (req, res) => {
    console.log('Mon index');
    res.send('Hello');
})

export default router;