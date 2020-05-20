import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Info from "../../Info";
import {InputLabel} from "@material-ui/core";

const {useState} = require("react");


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function CinemaForm({
    cinema, cinemaId, handleSubmit, created
}) {
    const [values, setValues] = useState(cinema | {});

    const onChange = (inputName) => (event) => {
        setValues({
            ...values,
            [inputName]: event.target.value,
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let cinema = {
            ...values,
            id : cinemaId
        };
        await handleSubmit(cinema);
    };
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate onSubmit={onSubmit}>
            <div>
                <InputLabel shrink={true}>Cinema name</InputLabel>
                <input
                    required
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={onChange('name')}
                     />
            </div>
            <div>
                <InputLabel shrink={true}>Cinema address</InputLabel>
                <input
                    required
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={onChange('address')}
                    />
            </div>
            <Button variant="contained" color="primary" type="submit">
                Create
            </Button>
            <div hidden={!created}>
                <Info
                    text="Done"
                />
            </div>
        </form>
    )

}
