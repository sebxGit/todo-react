import React from 'react'
import { useState } from 'react'

const Goals = () => {
	const [state, setState] = useState(false)
	const [btnDisabled, setBtnDisabled] = useState(true)

	return (
		<>
			<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<div class="mb-3 flex items-center border-b border-zinc-700 py-2">
				<p class="text-xl font-normal text-gray-700 dark:text-gray-400">Goals</p>
				</div>
				<ul>
					<li>Good university student</li>
					<li>Crazy volleyball player</li>
					<li>Having a lean build (70kg, fitness)</li>
					<li>Personal care, physically and mentally</li>
					<li>Mastering League of Legends</li>
				</ul>
				<button onClick={() => setState(!state)}  class="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						{(state === false && "Add") || "Hide"}
						<svg aria-hidden="true" className={`w-4 h-4 ml-2 -mr-1 ${state ? "transform -scale-100" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</button>

				{state === true && (
					<div class="flex items-center border-b border-zinc-700 py-2">
						<input onChange={e => setBtnDisabled(e.target.value.length === 0 ? true : false)}
						class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="what to do..?"/>
						<button class={`${btnDisabled ? "bg-blue-500 border-blue-500 hover:bg-blue-700  hover:border-blue-700" : "bg-blue-700 border-blue-700 hover:bg-blue-800  hover:border-blue-800"} flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded`} type="button">
							Add to list
						</button>
						<button onClick={() => setState(!state)}  
										class="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded" type="button">
							Cancel
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Goals