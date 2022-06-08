import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEntry from "./components/TodoEntry";
import TodoItem from "./components/TodoItem";

function App() {
	// TodoEntry Handling:
	// Format: {title: "text", content: "text", archive: boolean}
	const [entries, setEntries] = useState([
		{
			title: "How does this work?",
			content: "testing",
			archive: false,
		},
	]);
	const [titleInput, setTitleInput] = useState("");
	const [contentInput, setContentInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setEntries([
			...entries,
			{ title: titleInput, content: contentInput, archive: false },
		]);
		setTitleInput("");
		setContentInput("");
	};

	const handleDelete = (index) => {
		let storedEntry = [...entries];
		storedEntry.splice(index, 1);
		setEntries(storedEntry);
		console.log("Record Deleted");
	};

	return (
		<div className="App">
			<Header />
			<TodoEntry
				titleInput={titleInput}
				contentInput={contentInput}
				setTitleInput={setTitleInput}
				setContentInput={setContentInput}
				handleSubmit={handleSubmit}
			/>
			<div className="ToDoList">
				{entries.Map}

				{entries.map((entries, index) => {
					return (
						<TodoItem
							title={entries.title}
							content={entries.content}
							archive={entries.archive}
							handleDelete={() => handleDelete(index)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
