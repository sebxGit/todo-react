import React from 'react'

const Module = (module) => {
	return (
		<div className='flex flex-row p-2 border-2 w-1/6'>
			<div className='p-1 w-2/4'>{module.name}</div>
			<div className='p-1 w-1/4'>{module.hours}</div>
			<div className='p-1 w-1/4'><input type="checkbox"/></div>

		</div>
	)
}

export default Module