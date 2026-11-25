import {RegisterInput} from '../types/auth.type';
import {pool} from '../database/database';
import bcrypt from 'bcrypt';

export const register = async (input: RegisterInput) => {
    const result = await pool.query(`
        SELECT id FROM users WHERE email = $1;`,
        [input.email]
    );

    if (result.rows.length > 0) {
        throw new Error("Email already exists");
    }  

    const hashedPassword = await bcrypt.hash(input.password, 10);
     
    const user = await pool.query(`
        INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name, role, is_active;`,
        [input.email, hashedPassword, input.name]
    );

    return user.rows[0];
}
