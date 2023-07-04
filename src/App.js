import React, { useState, useRef } from 'react'
import ModuleList from './ModuleList';
import uuid from 'react-uuid';
import NavBar from './NavBar';
import Goals from './Goals'

const App = () => {
	const [modules, setModules] = useState([{ id: 1, name: 'test1', hours: '2', completed: false}]);
	const moduleNameRef = useRef();
	const moduleHoursRef = useRef();
	
	function handleAddModule(e) {
		const name = moduleNameRef.current.value;
		const hrs = moduleHoursRef.current.value;
		if (name === '' || hrs === '') return;

		setModules(prevModules => {
			return [...prevModules, { id: uuid(), name: name, hours: hrs, completed: false}]
		})
	}

	return (
		<>
			<NavBar/>
			<Goals/>
			<div className="p-4">
				<h1 className="font-bold mb-4">Todo-list</h1>
				<div className="flex flex-row w-80">
					<div className='p-1 w-1/2'>
						<input ref={moduleNameRef} class="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='add a name' ></input>
					</div>
					<div className='p-1 w-1/4'>
						<input type="number" ref={moduleHoursRef} class="shadow appearance-none border rounded w-full h-10 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='hrs' ></input>
					</div>
					<div className='p-1 w-1/4'>
						<button onClick={handleAddModule} class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm px-3 h-10 rounded">Add Todos</button>
					</div>
				</div>

				<ModuleList modules={modules}/>
				
			</div>
		</>
	)
}

export default App