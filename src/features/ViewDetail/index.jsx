import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';


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

function ViewDetail(props) {
	const { contact, onOpen } = props;
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
	const firstChar = (str) => {
		return str.charAt(0).toUpperCase();
	};

	const FormContent = () => {
		return (
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Avatar className={classes.randomColor}>{firstChar(contact.name)}</Avatar>
				</Grid>
				<Grid item xs={12}>
					<span>{contact.name}</span>
				</Grid>

				<Grid item xs={6}>
					{contact.phone}
				</Grid>
				<Grid item xs={6}>
					<CallTwoToneIcon />
				</Grid>
				<Grid item xs={12}>
					<span>{contact.address}</span>
				</Grid>
			</Grid>
		);
	};

	return (
		<div>
			
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
				<DialogContent>{FormContent()}</DialogContent>
			</Dialog>
		</div>
	);
}
export default ViewDetail;
