import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { getUserProfile, followUnfollowUser, getSuggestedUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.get("/follow/:id", followUnfollowUser);
router.post("/suggested",getSuggestedUser);
// router.post("/update",protectRoute,updateProfile);

export default router;