import React from 'react';
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
interface Props {
	_driver: boolean;
	method: () => void;
}
const DrawerComponent = ({_driver, method}: Props) => {
	return (
		<Drawer anchor='right' open={_driver} onClose={method} variant='persistent'>
			<List>
				<ListItem divider>
					<ListItemButton onClick={() => method()}>
						<ListItemIcon>
							<ListItemText>Men</ListItemText>
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
				<ListItem divider>
					<ListItemButton>
						<ListItemIcon>
							<ListItemText>women</ListItemText>
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
				<ListItem divider>
					<ListItemButton>
						<ListItemIcon>
							<ListItemText>Categories</ListItemText>
						</ListItemIcon>
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default DrawerComponent;
