import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = () => {
	return (
		<button>
			<HiOutlineTrash
				className="text-red-400 hover:text-red-600 transition-colors duration-150"
				size={24}
			/>
		</button>
	);
};

export default RemoveBtn;
