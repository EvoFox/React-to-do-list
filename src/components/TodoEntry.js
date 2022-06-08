const TodoEntry = ({
	titleInput,
	setTitleInput,
	contentInput,
	setContentInput,
	handleSubmit,
}) => {
	return (
		<div className="form-wrapper">
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input
					type="text"
					value={titleInput}
					onChange={(e) => setTitleInput(e.target.value)}
				/>
				<br />
				<label>Content</label>
				<input
					className="content"
					type="text"
					value={contentInput}
					onChange={(e) => setContentInput(e.target.value)}
				/>
				<br/>
				<input className="submit" type="submit" />
			</form>
		</div>
	);
};

export default TodoEntry;
