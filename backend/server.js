import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Todo from './todo.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = express();

app.use(cors());
app.use(express.json());


app.post('/todos/add', async (req, res) => {
    try {
        const { description, responsible, priority, completed } = req.body;
        const newTodo = new Todo({ description, responsible, priority, completed });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


app.post('/todos/complete/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        todo.completed = !todo.completed;
        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


app.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
    })
    .catch((err) => console.error('Database connection error:', err));