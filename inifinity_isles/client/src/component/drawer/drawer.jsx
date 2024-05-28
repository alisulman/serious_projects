/* eslint-disable react/prop-types */

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { useSelector } from 'react-redux';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link, useNavigate } from 'react-router-dom';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { red } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import toast, { Toaster } from 'react-hot-toast';

export default function TemporaryDrawer({ referance }) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const state = useSelector(state => state.User)
    const user = state.isAuth
    const role = user?.data?.role
    const navigate = useNavigate()
    const handleLogout = async() => {
        await toast('You Log out, you may come back anytime')
        localStorage.removeItem('auth')
        navigate('/authenctication/registeration')
        window.location.reload()
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <div className='flex items-center gap-4 text-white bg-gray-900 py-2.5 px-5'>
                <div className='flex justify-center items-center uppercase rounded-full w-10 h-10' style={{ backgroundColor: user?.data?.colors[0]?.hex, color: user?.data?.colors[0]?.textColour }}>
                    {user?.data?.email?.slice(0, 1)}
                </div>
                <div className='flex flex-col justify-center text-lg'>
                    <span className='text-sm'>{role === "user" ? 'Welcome' : 'Welcome back'} </span>
                    <span className='capitalize font-semibold'>{user?.data?.username}</span>
                </div>
            </div>
            <div className='flex flex-col gap-1 text-gray-500'>
                {role === "buyer" || role === "seller" ? (
                    <Link to="/dashboard">
                        <ListItemButton className='flex gap-7'>
                            <div><DashboardIcon /></div>
                            <div className='text-lg font-[400]'>Dashboard</div>
                        </ListItemButton>
                    </Link>
                ) : null}
                <ListItemButton className='flex gap-7'>
                    <div><HomeIcon /></div>
                    <div className='text-lg font-[400]'>Home</div>
                </ListItemButton>
                <Link to="/profile">
                    <ListItemButton className='flex gap-7'>
                        <div><AccountCircleIcon /></div>
                        <div className='text-lg font-[400]'>Profile</div>
                    </ListItemButton>
                </Link>
                <ListItemButton className='flex gap-7'>
                    <div><CheckroomIcon /></div>
                    <div className='text-lg font-[400]'>LookBook</div>
                </ListItemButton>
                <ListItemButton className='flex gap-7'>
                    <div><CategoryIcon /></div>
                    <div className='text-lg font-[400]'>Categories</div>
                </ListItemButton>
                <ListItemButton className='flex gap-7'>
                    <div><LocalOfferIcon /></div>
                    <div className='text-lg font-[400]'>Deals</div>
                </ListItemButton>
            </div>
            <Divider />
            <div className='flex flex-col gap-1 text-gray-500'>
                <ListItemButton className='flex gap-7'>
                    <div><CallIcon /></div>
                    <div className='text-lg font-[400]'>Contact us</div>
                </ListItemButton>
                <ListItemButton className='flex gap-7'>
                    <div><MiscellaneousServicesIcon /></div>
                    <div className='text-lg font-[400]'>Customer Services</div>
                </ListItemButton>
                <ListItemButton className='flex gap-7'>
                    <div><InfoIcon /></div>
                    <div className='text-lg font-[400]'>About us</div>
                </ListItemButton>
                <ListItemButton className='flex gap-7' onClick={handleLogout}>
                    <div><LogoutIcon sx={{ color: red[600] }} /></div>
                    <div className='text-lg text-red-600 font-[400]'>Log out</div>
                </ListItemButton>
            </div>
        </Box>
    );

    return (
        <div>
            <Toaster />
            <Button onClick={toggleDrawer(true)} ref={referance} style={{ display: 'none' }}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
