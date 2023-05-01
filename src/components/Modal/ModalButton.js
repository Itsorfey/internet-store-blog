import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '5px solid #FFA500',
    boxShadow: 24,
    p: 4,
};

const ModalButton = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);

    const timeHandleModal = () => {
        handleChildOpen()
        handleClose()
    }
    const [child, setChild] = React.useState(false)
    const handleChildOpen = () => setChild(true)
    const handleChildClose = () => setChild(false)
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Оставьте свои данные
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Фамилия и Имя"
                            color='warning'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            type="number"
                            color='warning'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+996</InputAdornment>,
                            }}
                        />
                        <Button onClick={() => timeHandleModal()} color='warning'>Отправить</Button>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={child}
                onClose={handleChildClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Спасибо! В течении 5 минут, с вами свяжется наш оператор!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button onClick={() => handleChildClose()} color='warning'>Закрыть</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
export default ModalButton
