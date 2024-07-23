import pool from './pool.mjs';

export const getAllMessages = async () => {
    const { rows } = await pool.query('SELECT * FROM messages ORDER BY added DESC');
    return rows;
}

export const newMessage = async (user, title, text) => {
    const result = await pool.query(
        'INSERT INTO messages ("user", text, added) VALUES ($1, $2, $3) RETURNING *',
        [user, `${title}: ${text}`, new Date()]
    );
}