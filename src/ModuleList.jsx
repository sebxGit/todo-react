import React from 'react'
import Module from './Module'

const ModuleList = ({modules}) => {
	return (
		modules.map(module => {
			return <Module name={module.name} hours={module.hours}/>
		})
	)
}

export default ModuleList