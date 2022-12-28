import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// import { CUSTOM_EVENT_TYPES } from '../globals/constants';

import Header from './Header';
import Footer from './Footer/index.js';
import SideHeader from './SideHeader';

import './Layout.scss';

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	const [disableLayout, setDisableLayout] = useState(false);
	const [isHeaderBackgroundHuge, setIsHeaderBackgroundHuge] = useState(false);

	const handleInfiniteScrolling = (e) => {
		const scrollY = e.target.scrollHeight - e.target.scrollTop;
		const height = e.target.offsetHeight;
		const offset = height - scrollY;

		if (offset === 0 || offset === 1) {
			// window.dispatchEvent(new CustomEvent(CUSTOM_EVENT_TYPES.SCROLL_END, {}));
		}
	};

	return !disableLayout ? (
		<div className={`Layout d-flex flex-column w-100 h-100`}>
			{pathname === '/' ? (
				''
			) : (
				<div className="Layout__header">
					<Header isHeaderBackgroundHuge={isHeaderBackgroundHuge} />
				</div>
			)}

			<div
				onScroll={handleInfiniteScrolling}
				className="Layout__wrapper h-100 overflow-auto"
			>
				{pathname === '/' ? (
					<div onScroll={handleInfiniteScrolling} className="childrenStyle ">
						{children}
					</div>
				) : (
					<div className="row">
						<div className="col-3">
							<SideHeader />
						</div>
						<div className="col-9">
							<div
								onScroll={handleInfiniteScrolling}
								className="childrenStyle "
							>
								{children}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="Layout__footer">
				<Footer />
			</div>
		</div>
	) : (
		children
	);
};

export default Layout;
