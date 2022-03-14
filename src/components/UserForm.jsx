import React, { useState } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import { Typography } from '@mui/material';

const UserForm = () => {
    const [state, setState] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    })

    const nextStep = () => {
        const { step } = state;
        setState((state) => ({
            ...state,
            step: step + 1
        }));
    }

    const prevStep = () => {
        const { step } = state;
        setState((state) => ({
            ...state,
            step: step - 1
        }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((state) => ({
            ...state,
            [name]: value
        }));
    }

    const { step } = state;
    const { firstName, lastName, email, occupation, city, bio } = state;
    const values = { firstName, lastName, email, occupation, city, bio };

    console.info(step, values);

    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    values={values}
                    nextStep={nextStep}
                    handleChange={handleChange}
                />
            )
        case 2:
            return (
                <FormPersonalDetails
                    values={values}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                />
            )
        case 3:
            return (
                <Confirm 
                    values={values}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            )
        case 4:
            return (
                <Success prevStep={prevStep} />
            )
        default:
            return (
                <Typography variant="h3" component="h1" m={2}>
                   Multi Step Form With React & Material UI v5.5.0
                </Typography>
            )
    }
}

export default UserForm