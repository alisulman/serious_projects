/* eslint-disable react/prop-types */

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function TemporaryDrawer({ referance }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const state = useSelector(state => state.User)
    const user = state.isAuth

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex items-center gap-4 text-white bg-gray-900 py-3 px-5'>
                <div className='flex justify-center items-center uppercase rounded-full w-9 h-9' style={{ backgroundColor: user?.data?.colors[0]?.hex, color: user?.data?.colors[0]?.textColour }} onClick={() => drawerRef.current.click()}>
                    {user?.data?.email?.slice(0, 1)}
                </div>
                <div className='text-xl'>
                    <span>Hello </span>
                    <span className='capitalize font-semibold'>{user?.data?.username}</span>
                </div>
            </div>
            <ListItem disablePadding className='flex flex-col -ml-10'>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText className='text-lg font-medium'>Dashboard</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText className='text-lg font-medium'>Home</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText className='text-lg font-medium'>Dashboard</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText className='text-lg font-medium'>Dashboard</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText className='text-lg font-medium'>Dashboard</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} ref={referance} style={{ display: 'none' }}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
