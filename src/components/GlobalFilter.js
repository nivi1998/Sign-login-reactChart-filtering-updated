import React from 'react';

const GlobalFilter = ({ filter, setFilter }) => {
	return (
		<span className="setMargin headText">
			Search:{''}
			<input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
		</span>
	);
};

export default GlobalFilter;
