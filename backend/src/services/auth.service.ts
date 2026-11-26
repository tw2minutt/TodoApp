import {LoginInput, RegisterInput} from '../types/auth.type';
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
        INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id, email, username, role, is_active;`,
        [input.email, hashedPassword, input.username]
    );

    return user.rows[0];
}

export const login = async (input: LoginInput) => {
    const result = await pool.query(`SELECT id, email, password, username, role, is_active FROM users WHERE email = $1;`, 
        [input.email]);
    if (result.rows.length === 0) {
        throw new Error("Invalid email or password");
    }
    const user = result.rows[0];
    const isPasswordMatch = await bcrypt.compare(input.password, user.password);
    if(!isPasswordMatch) {
        throw new Error("Invalid email or password");
    }
    if(!user.is_active) {
        throw new Error("User account is not active. Please contact support.");
    }
    const {password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
