import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {
	AppBar,
	Dialog,
	DialogContent,
	Grid,
	IconButton,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import EditDialog from './EditDialog';
import { useDispatch, useSelector } from 'react-redux';
import { saveList } from 'features/ListContact/listSlice.redux';
import { saveListSearch } from 'conponents/Header/listSearchSlice.redux';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './contact.style';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import DnsIcon from '@material-ui/icons/Dns';
import BusinessIcon from '@material-ui/icons/Business';
function ContactItem(props) {
	const { contact } = props;
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const theme = useTheme();

	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleCloseView = () => {
		setOpen(false);
	};

	const listContact = useSelector((state) => state.listContact);
	const listSearch = useSelector((state) => state.listSearch);
	const dispatch = useDispatch();

	const handleDelete = () => {
		const id = contact.id;
		const list = [...listContact];
		const listShow = [...listSearch];
		const objIndex = list.findIndex((obj) => obj.id === id);
		list.splice(objIndex, 1);

		const objIndexSearch = listShow.findIndex((obj) => obj.id === id);
		listShow.splice(objIndexSearch, 1);

		const actionSearch = saveListSearch(listShow);
		dispatch(actionSearch);

		const action = saveList(list);
		dispatch(action);
	};

	const firstChar = (str) => {
		return str.charAt(0).toUpperCase();
	};
	const FormContent = () => {
		return (
			<Grid container spacing={2} item xs={12} md={9} lg={6} className="pb-4 pt-3">
				<Grid item xs={12}>
					<div className="d-flex align-items-center">
						<Avatar className={classes.randomColor}>{firstChar(contact.name)}</Avatar>
						<a href={'tel:' + contact.phone}>
							{' '}
							<CallTwoToneIcon className="text-success ml-5" />
						</a>
					</div>
				</Grid>
				<Grid item xs={12}>
					<DnsIcon className="mr-3" />
					<span>{contact.name}</span>
				</Grid>

				<Grid item xs={12}>
					<a href={'tel:' + contact.phone}>
						<SmartphoneIcon className="mr-3" />

						{contact.phone}
					</a>
				</Grid>

				<Grid item xs={12}>
					<BusinessIcon className="mr-3" />
					<span>{contact.address}</span>
				</Grid>
				<Grid item xs={12} className={classes.dialogBottom}>
					<div className="d-flex align-items-center justify-content-end">
						<CancelIcon
							className={classes.pointer + ' mr-3 text-danger'}
							onClick={() => handleCloseView()}
						/>
						<EditDialog className={classes.pointer + ' text-secondary'} contact={contact} />
					</div>
				</Grid>
			</Grid>
		);
	};
	return (
		<Grid container className="w-100 d-flex justify-content-between align-items-center pb-2">
			<Grid item xs={8} sm={4} onClick={() => handleClickOpen()} className={classes.pointer}>
				<div className="row align-items-center pl-3 ">
					<Avatar src={contact.avatarURL} className={classes.randomColor}>
						{firstChar(contact.name)}
					</Avatar>
					<span className={classes.name + ' pl-3 ' + classes.ellipsisText}>{contact.name}</span>
				</div>
			</Grid>
			<Grid item sm={3} onClick={() => handleClickOpen()}>
				<div className={classes.phone + ' ' + classes.ellipsisText}>{contact.phone}</div>
			</Grid>
			<Grid item sm={3} onClick={() => handleClickOpen()}>
				<div className={classes.address + ' ' + classes.ellipsisText}>{contact.address}</div>
			</Grid>
			<Grid item xs={4} sm={2}>
				<div className={classes.actions}>
					<EditDialog className={classes.pointer} contact={contact} />
					<DeleteOutlinedIcon className={classes.pointer + ' ml-2'} onClick={() => handleDelete()} />
				</div>
			</Grid>

			<div>
				<Dialog
					fullWidth={true}
					maxWidth={'sm'}
					fullScreen={fullScreen}
					open={open}
					onClose={handleCloseView}
					aria-labelledby="responsive-dialog-title"
				>
					<div className={classes.dialogTitle + ' pt-3 pl-3 pr-3'} id="responsive-dialog-title">
						<h2>{'Contact'}</h2>
						<div className="d-flex align-items-center ml-auto">
							<CancelIcon
								className={classes.pointer + ' mr-3 text-danger'}
								onClick={() => handleCloseView()}
							/>
							<EditDialog className={classes.pointer + ' text-secondary'} contact={contact} />
						</div>
					</div>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={handleCloseView} aria-label="close">
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
		</Grid>
	);
}

export default ContactItem;
