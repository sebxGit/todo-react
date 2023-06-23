import React, { useState } from 'react'
import plusIcon from './images/plus.svg'
import minusIcon from './images/minus.svg'
import chevronUp from './images/chevron-up.svg'
import chevronDown from './images/chevron-down.svg'
import ModuleExtention from './ModuleExtention'

const Module = (module) => {
	const [isShown, setIsShown] = useState(false);
	const [isExtended, setIsExtended] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function HandleExtended(e){
		setIsExtended(bool => !bool);
	}

	function handleClick(e){
		switch(e.detail){
			case 2: {setShowModal(true); break;}
			default: break;
		}
	}


	return (
		<>
			{isExtended && <ModuleExtention/>}
			<div className={'flex flex-row p-2 border-2 w-1/4 rounded'} onClick={(e) => handleClick}>
					<div className='p-1 w-2/4'>{module.name}</div>
					<div className='p-1 w-1/4 flex flex-row'	onMouseEnter={() => setIsShown(true)}	
																										onMouseLeave={() => setIsShown(false)}>
							{isShown && <img src={minusIcon} alt="minus" className='w-4'/>}
							<div className='justify-self-center'>{module.hours}</div>
							{isShown && <img src={plusIcon} alt="plus" className='w-4'/>}
					</div>
					<div className='p-1 w-1/4'>
						<input type="checkbox"/>
						</div>
					<img src={isExtended ? chevronUp : chevronDown} alt="up" onClick={(e) => HandleExtended(e)}/>
			</div>
		</>
	)
}

export default Module