import { pool } from "../database/database";

export const getTodos = async () => {
    const result = await pool.query(`
        SELECT * 
        FROM todos
        ORDER BY id DESC`
    );
    return result.rows;
}

export const createTodo = async (title: string) => {
    const result = await pool.query(`
        INSERT INTO todos (title) 
        VALUES ($1) 
        RETURNING *
    `, [title]);
    return result.rows[0];
}

export const updateTodo = async (
    id: number,
    completed: boolean
) => {
    const result = await pool.query(`
        UPDATE todos    
        SET
            completed = $1,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING *
    `, [completed, id]
    );
    console.log({
        id,
        completed
    });
    console.log("UPDATED:", result.rows[0]);
    return result.rows[0];
}

export const deleteTodo = async (id: number) => {
    const result = await pool.query(`
        DELETE FROM todos
        WHERE id = $1
        RETURNING *
    `, [id]
    );
    return result.rows[0];
}
