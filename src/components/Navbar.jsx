import React from 'react';
import HomeButton from './HomeButton';
import NotificationButton from './NotificationButton';
import MessageButton from './MessageButton';
import ClucksButton from './ClucksButton';
import SearchBar from './searchbar';

const Navbar = () => {
	return (
		<React.Fragment>
			<HomeButton></HomeButton>
			<NotificationButton></NotificationButton>
			<MessageButton></MessageButton>
			<ClucksButton></ClucksButton>
			<SearchBar></SearchBar>
		</React.Fragment>
	);
};

export default Navbar;
