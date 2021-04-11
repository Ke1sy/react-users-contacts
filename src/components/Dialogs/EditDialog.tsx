import React, {useState, useEffect, FC} from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    TextField,
    FormControl, FormControlLabel, Checkbox,
} from '@material-ui/core';
import useStyles from "./styles";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FormDataType, UserType} from "../../types/users";

type EditDialogType = {
    user: UserType | null,
    createUpdateUser: (user: FormDataType, type: 'add' | 'edit') => void,
    isOpen: boolean,
    openCreateUpdateDialog: (value: boolean, user: UserType | null) => void
}

const EditDialog: FC<EditDialogType> = ({createUpdateUser, isOpen, user, openCreateUpdateDialog}) => {
    const classes = useStyles();
    const [actionType, setActionType] = useState<'add' | 'edit'>('add');
    const [formData, setFormData] = useState<FormDataType>({
        id: null,
        name: '',
        email: '',
        phone: '',
        city: '',
        surname: '',
        active: false
    });

    useEffect(() => {
        if (user) {
            setActionType('edit');
            const {id, name, email, phone, city, active, surname} = user;
            setFormData({
                id,
                name,
                email,
                phone,
                city,
                active,
                surname
            })
        } else {
            setActionType('add');
            clearFormValues();
        }
    }, [user]);

    const handleChange = (name: string) => ({target}: any) => {
        // const {type} = target;
        setFormData({
            ...formData,
            [name]: target.type === 'checkbox' ? target.checked : target.value
        })
    };

    const handleClose = () => {
        openCreateUpdateDialog(false, null);
        clearFormValues();
    };

    const createUpdateUserSubmit = () => {
        const {id, name, email, phone, city, surname, active} = formData;
        createUpdateUser({
            id,
            name,
            email,
            phone: phone,
            city,
            surname,
            active
        }, actionType);
        handleClose();
    };

    const clearFormValues = () => {
        setFormData({
            id: null,
            name: '',
            email: '',
            phone: '',
            city: '',
            surname: '',
            active: false
        })
    };

    let {name, email, phone, city, surname, active} = formData;

    return (
        <Dialog
            maxWidth="sm"
            fullWidth={true}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className={classes.title}>
                {
                    actionType === 'add'
                        ? 'Create New User'
                        : 'Update User'
                }
            </DialogTitle>
            <DialogContent className={classes.content}>
                <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        required={true}
                        onChange={handleChange('name')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        autoFocus
                        id="surname"
                        label="Surname"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={surname}
                        required={true}
                        onChange={handleChange('surname')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="email"
                        label="Email"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={email}
                        required={true}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={phone}
                        required={true}
                        onChange={handleChange('phone')}
                    />
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextField
                        id="city"
                        label="City"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={city}
                        required={true}
                        onChange={handleChange('city')}
                    />
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={active}
                            onChange={handleChange('active')}
                            name="active"
                            color="primary"
                        />
                    }
                    label="Active"
                />
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={handleClose} variant="outlined" className={classes.cancelBtn}>
                    <CancelIcon fontSize="small"/>Cancel
                </Button>
                <Button onClick={createUpdateUserSubmit} color="primary" variant="outlined">
                    <CheckCircleIcon fontSize="small"/>
                    {
                        actionType === 'add'
                            ? 'Create'
                            : 'Update'
                    }
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default EditDialog;
