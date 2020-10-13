import React from 'react';
import ContactItem from 'features/ContactItem';
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {},
	totalTextSize: {
		fontSize: '12px',
	},
	phone: {
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	address: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
}));
function HeadContact(length) {
	const classes = useStyles();
	return (
		<div className="pb-3">
			<Grid container item className="w-100 d-flex justify-content-between">
				<Grid item xs={4}>
					<span>Name</span>
				</Grid>
				<Grid item xs={3}>
					<span className={classes.phone}>Phone</span>
				</Grid>
				<Grid item xs={3}>
					<span className={classes.address}>Address</span>
				</Grid>
				<Grid item xs={2}>
					<span></span>
				</Grid>
			</Grid>
			<hr />
			<span className={classes.totalTextSize}>Contact({length})</span>
		</div>
	);
}

function ListContact(props) {
	const listSearch = useSelector((state) => state.listSearch);

	return (
		<div className="d-flex justify-content-center">
			<Grid container item xs={12} md={9} lg={6} className="d-flex flex-column">
				{HeadContact(listSearch.length)}
				{listSearch.map((item, index) => (
					<ContactItem key={index} contact={item} />
				))}
			</Grid>
		</div>
	);
}

export default ListContact;
