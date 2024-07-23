import asyncHandler from 'express-async-handler';
import { getAllMessages, newMessage } from '../db/queries.mjs';

export const messagesGet = asyncHandler(async (req,res) => {
    const messages = await getAllMessages();
    res.render('messages', { messages });
})

export const newMessagePost = asyncHandler(async (req,res) => {
    const { user, title, text } = req.body;
    const send = await newMessage(user, title, text);
    res.redirect('/');
})