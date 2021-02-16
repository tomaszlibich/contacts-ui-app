import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import FormControl from '@material-ui/core/FormControl';
import { FormattedMessage } from "react-intl";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { ValidationService } from '../../services/validator';
import { addContact } from '../../actions/add-contact';
import { editContact } from '../../actions/edit-contact';
import { injectIntl } from 'react-intl'
import { useStateValue } from "../../providers/state";
import { withStyles } from "@material-ui/core/styles";

const { isValidCountryCode, isValidFirstName, isValidLastName, isValidPhone } = new ValidationService();
const countryCodes = ['44', '48', '1'];

const styles = (theme) => ({
  actions: {
    textAlign: 'center'
  },
  errorMessage: {
    color: theme.palette.error.main,
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  header: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  phoneNumberControl: {
      marginTop: theme.spacing(2)
  },
  root: {
    flexGrow: 1
  },
  successMessage: {
    color: theme.palette.success.main,
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  textInput: {
    marginBottom: theme.spacing(2),
    width: '300px'
  }
});


const ContactForm = props => {
  const { classes, intl, isEdit, contactToEdit = {} } = props;
  const initialFirstName = contactToEdit.firstName || '';
  const initialLastName = contactToEdit.lastName || '';
  const initialCountryCode = contactToEdit.countryCode || '';
  const initialPhoneNumber = contactToEdit.phoneNumber || '';
  const [{ contacts }, dispatch] = useStateValue();
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setCountryCode('');
    setPhoneNumber('');
  };

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  }

  const validateAndSubmit = () => {
    setErrorMessage('');

    if (!isValidFirstName(firstName)) {
        setErrorMessage(intl.messages['error.invalidFirstName']);
        return;
    }

    if (!isValidLastName(lastName)) {
        setErrorMessage(intl.messages['error.invalidLastName']);
        return;
    }

    if (!isValidCountryCode(countryCode, countryCodes)) {
        setErrorMessage(intl.messages['error.selectCountryCode']);
        return;
    }

    if (!isValidPhone(phoneNumber)) {
        setErrorMessage(intl.messages['error.invalidPhoneNumber']);
        return;
    }

    const contactId = countryCode + phoneNumber;
    const isAlreadyThere = contacts.find(contact => contact.id === contactId);

    if (!isEdit && isAlreadyThere) {
        setErrorMessage(intl.messages['error.contactAlreadyExists']);
        return;
    }

    if (isEdit) {
      editContact({
        id: contactToEdit.id,
        firstName,
        lastName,
        countryCode,
        phoneNumber
      }, contacts, dispatch);
      setSuccessMessage(intl.messages['messages.contactEditedSuccessfully'])
    } else {
      addContact({
        id: contactId,
        firstName,
        lastName,
        countryCode,
        phoneNumber
    }, contacts, dispatch);
      setSuccessMessage(intl.messages['messages.contactAddedSuccessfully']);
    }

    resetForm();
  };

  const updateFirstName = (event) => {
    resetMessages();
    setFirstName(event.target.value);
  };

  const updateLastName = (event) => {
    resetMessages();
    setLastName(event.target.value);
  };

  const updateCountryCode = (event) => {
    resetMessages();
    setCountryCode(event.target.value);
  };

  const updatePhoneNumber = (event) => {
    resetMessages();
    setPhoneNumber(event.target.value);
  };

  return (
    <Container className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <div className={classes.formColumn}>
          <FormControl variant="filled" className={classes.formControl}>
            <TextField id="firstname" className={classes.textInput} label="First Name" variant="filled" value={firstName} onChange={updateFirstName} />
            <TextField id="lastname" className={classes.textInput} label="Last Name" variant="filled" value={lastName} onChange={updateLastName} />
          </FormControl>
        </div>
        <div className={classes.formColumn}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="countrycode-label">Country code</InputLabel>
            <Select
                labelId="countrycode-label"
                id="countrycode"
                value={countryCode}
                onChange={updateCountryCode}
                >
                <MenuItem value="">
                    <em>Select...</em>
                </MenuItem>
                {countryCodes.map((code, index) => <MenuItem value={code} key={index}>{`+${code}`}</MenuItem>)}
            </Select>
            <div className={classes.phoneNumberControl}>
                <TextField id="phonenumber" label="Phone number" variant="filled" value={phoneNumber} onChange={updatePhoneNumber} />
            </div>
          </FormControl>
        </div>
      </form>
      <div className={classes.actions}>
        <Button variant="contained" color="secondary" onClick={validateAndSubmit}>
          <FormattedMessage id={isEdit ? 'save' : 'add'} />
        </Button>
      </div>
      {!!errorMessage && <div className={classes.errorMessage}>
        {errorMessage}
      </div>}

      {!!successMessage && <div className={classes.successMessage}>
        {successMessage}
      </div>}
    </Container>
  );
};

export default withStyles(styles)(injectIntl(ContactForm));
