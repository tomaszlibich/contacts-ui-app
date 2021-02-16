import ContactForm from '../../components/ContactForm';
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../../providers/state";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  header: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  root: {
    flexGrow: 1,
  }
});

const EditView = (props) => {
  const [{ contacts }] = useStateValue();
  const { classes, id } = props;
  const contactToEdit = contacts.find(contact => contact.id === id);

  return (
    <Container className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.header}>
        <FormattedMessage id="edit" />
      </Typography>
      <ContactForm isEdit={true} contactToEdit={contactToEdit} />
    </Container>
  );
};

export default withStyles(styles)(EditView);
