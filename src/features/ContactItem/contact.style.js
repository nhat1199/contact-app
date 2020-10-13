import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	randomColor: {
		color: 'white',
		backgroundColor: '#17a2b8',
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
	},
	pointer: {
		cursor: 'pointer',
	},
	ellipsisText: {
		maxWidth: '250px',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		[theme.breakpoints.down('xs')]: {
			maxWidth: '200px',
		},
	},
	phone: {
		cursor: 'pointer',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	address: {
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
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
        display: 'flex',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	dialogActions: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
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
    dialogBottom: {
        [theme.breakpoints.up('md')]: {
			display: 'none',
		},
    }
}));

export default useStyles;
