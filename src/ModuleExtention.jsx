import React from 'react'

const ModuleExtention = () => {
	return (
		<>
			<div class="block p-2 w-1/4 h-36 bg-white rounded-lg border border-gray-200 shadow-md z-10">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todo Configuration</h5>
				<div className="flex flex-col">
					<div className="flex flex-row w-80">
						<div className='p-1 w-1/2'>
							<input class="shadow appearance-none border rounded w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='add a name' ></input>
						</div>
						<div className='p-1 w-1/4'>
							<input type="number" class="shadow appearance-none border rounded w-full h-10 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='hrs' ></input>
						</div>
					</div>
					<div className="flex flex-row w-80">
						<div className='w-2/4'></div>
						<div className='pl-1 w-1/4'>
							<button class="bg-green-500 hover:bg-green-400 text-white font-bold text-sm px-3 h-10 rounded">Update</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ModuleExtention