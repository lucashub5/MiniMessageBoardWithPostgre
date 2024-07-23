import express from 'express';
import * as controllers from '../controllers/messages.mjs';

const router = express.Router();

router.get('/', controllers.messagesGet);
router.post('/new', controllers.newMessagePost);

export default router;