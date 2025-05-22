import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    description: { type: String },
    responsible: { type: String },
    priority: { type: String },
    completed: { type: Boolean }
})


const Todo = mongoose.model('Todo', TodoSchema)

export default Todo