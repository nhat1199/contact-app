import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import InputField from 'custom-field/InputField';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from 'features/ListContact/listSlice.redux';
import { addToListSearch } from 'conponents/Header/listSearchSlice.redux';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	appBar: {
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	dialogTitle: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	dialogActions: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	pointer: {
		cursor: 'pointer',
	},
	form: {
		[theme.breakpoints.down('sm')]: {
			width: '250px',
		},
		[theme.breakpoints.up('sm')]: {
			width: '500px',
		},
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
}));

function AddDialog(props) {
	const listContact = useSelector((state) => state.listContact);
	const dispatch = useDispatch();

	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const classes = useStyles();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		phone: Yup.number().positive().required('Phone is positive number required!'),
	});

	const crateId = () => {
		return listContact[listContact.length - 1].id + 1;
	};

	const handleSubmitAdd = (value) => {
		let id = crateId();
		const action = addToList({ ...value, id: id });
		const actionSearch = addToListSearch({ ...value, id: id });
		dispatch(actionSearch);
		dispatch(action);
	};
	const FormContainer = () => {
		return (
			<Grid container spacing={2}>
				<Grid item>
					<Avatar className={classes.randomColor}></Avatar>
				</Grid>
				<Grid item>
					<Formik
						initialValues={{ name: '', address: '', phone: '' }}
						validationSchema={validationSchema}
						enableReinitialize={true}
						onSubmit={(value) => {
							handleSubmitAdd(value);
							handleClose();
						}}
					>
						{({ values, setFieldValue }) => {
							return (
								<Form className={classes.form} autoComplete="off">
									<FastField name="name" component={InputField} label="Name" placeholder="Name" />
									<FastField name="phone" component={InputField} label="Phone" placeholder="Phone" type="number"/>
									<FastField
										name="address"
										component={InputField}
										label="Address"
										placeholder="Aa..."
									/>
									<div className="m-auto p-3">
										<Button color="secondary" onClick={handleClose}>
											Cancel
										</Button>
										<Button type="submit" color="primary">
											Save
										</Button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</Grid>
			</Grid>
		);
	};

	return (
		<div>
			<AddIcon className={classes.pointer} onClick={handleClickOpen}></AddIcon>
			<Dialog
				fullWidth={true}
				maxWidth={'sm'}
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title"
			>
				<DialogTitle className={classes.dialogTitle} id="responsive-dialog-title">
					{'Add new Contact'}
				</DialogTitle>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Edit Contact
						</Typography>
					</Toolbar>
				</AppBar>
				<DialogContent>{FormContainer()}</DialogContent>
			</Dialog>
		</div>
	);
}
export default AddDialog;
