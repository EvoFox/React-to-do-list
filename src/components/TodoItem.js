const TodoItem = ({ title, content, archive, handleDelete }) => {
	return (
		<div className="todo-item">
			<h3>{title}</h3>
			<p>{content}</p>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
};

export default TodoItem;
