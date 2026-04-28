import React, { useState } from "react";

function Todolist() {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        setList([...list, inputValue]);
        setInputValue("");
    }

    const handleDelete = (index) => {
        const updatedList = list.filter((_, ind) => ind != index);
        setList(updatedList);
    }

    return (
        <>
            <div style={{ backgroundColor: "red" }}>
                <h3>This is Todolist APP</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="todo">Enter To do:</label><input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button type="submit">Add</button>
                    </div>
                </form>
                <div>
                    <h3>Todo List</h3>
                    <ul>
                        {
                            list.map((x, index) => (
                                <li key={index}>{x} <button onClick={() => handleDelete(index)}>Delete</button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Todolist;