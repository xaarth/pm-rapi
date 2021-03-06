import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Board',
    },
    name: { type: String, required: true },
    position: { type: Number, required: true },
    description: String,
  },
  { timestamps: true }
);

todoSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    delete ret._id;
  },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
