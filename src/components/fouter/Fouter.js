import {useState} from 'react';

function Fouter({todos, setTodos}) {
	const removeAll = ()=>{
		setTodos([]);
	};
    return (
        <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className="selected">All</a>
			</li>
			<li>
				<a>Active</a>
			</li>
			<li>
				<a>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={()=>removeAll(setTodos)}>
			Clear completed
		</button>
	</footer>
    )
}

export default Fouter
