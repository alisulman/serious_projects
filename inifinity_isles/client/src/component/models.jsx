/* eslint-disable react/prop-types */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import images from '../assets/bin.png';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../apps/action/prodAction';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// eslint-disable-next-line react/prop-types
export default function TransitionsModal({ referance, item }) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = () => {
        dispatch(removeProduct(item._id))
    }

    return (
        <div>
            <Button onClick={handleOpen} ref={referance} style={{ display: 'none' }}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" className='text-center'>
                            Are you sure?
                        </Typography>
                        <Typography id="transition-modal-description" variant="p" component="h4" className='text-center'>
                            You delete {item.title}
                        </Typography>
                        <img src={images} className='flex justify-center w-28 mx-auto my-3' />
                        <div className='flex justify-between items-center mt-5 mx-6 cursor-pointer'>
                            <div className='bg-red-600 text-white px-5 py-3' onClick={handleClick}>Delete</div>
                            <div className='bg-gray-600 text-white px-5 py-3' onClick={() => setOpen(false)}>Cancel</div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
