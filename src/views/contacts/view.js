import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import DeleteIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  contacts: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "24px",
    width: "100%",
  },
  accordion: {
    width: "100%",
  },
  details: {
    display: "block",
    margin: '0 48px 0 0',
  },
  header: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  noContacts: {
    marginTop: "10%",
    padding: "16px",
  },
  editKey: {
    fontSize: "0.85em",
    position: "relative",
    "&:active": {
      top: "2px",
    },
  },
  deleteKey: {
    background: 'black',
    color: 'white',
    fontSize: "0.85em",
    position: "relative",
    "&:active": {
      top: "2px",
    },
    "&:hover": {
      background: theme.palette.error.main
    },
    marginLeft: '12px'
  },
  deleteKeyMarked: {
    background: theme.palette.error.main
  },
  accordionDetailsLeft: {
    width: '82%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  accordionDetailsRight: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  deleteMarkedButtonWrapper: {
    textAlign: 'right',
    "&.bottom": {
      marginTop: '24px'
    },
  },
  deleteMarkedButton: {
    background: theme.palette.error.main,
    color: 'white',
    "&:hover": {
      background: 'black'
    },
  }
});

const ContactsView = (props) => {
  const { contacts, onDeleteClick, onDeleteMarked, classes, markedForDeletion } = props;

  const onDeleteFabClick = (id) => {
    onDeleteClick(id);
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.header}>
        <FormattedMessage id="contacts" />
      </Typography>
      {!!markedForDeletion.length && <Container className={classes.deleteMarkedButtonWrapper}>
        <Button variant="contained" className={classes.deleteMarkedButton} onClick={onDeleteMarked}>
          <FormattedMessage id="delete.marked" />
        </Button>
      </Container>}
      {(!contacts || contacts.length === 0) && (
        <Paper className={classes.noContacts}>
          <Typography variant="body1">
            <FormattedMessage id="contacts.nocontacts" />
          </Typography>
        </Paper>
      )}
      {!!contacts && !!contacts.length && (
        <Container className={classes.contacts}>
          {contacts.map((contact, index) => {
            const isToBeDeleted = markedForDeletion.includes(contact.id);

            return (
              <Accordion
                className={`${classes.accordion} animated flipInX`}
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${contact.id}-content`}
                  id={`${contact.id}-header`}
                >
                  <Typography className={classes.heading}>
                    {contact.firstName} {contact.lastName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <div className={classes.accordionDetailsLeft}>
                    <Box className={classes.details}>
                      <Typography variant="h6">
                        <FormattedMessage id="contacts.id" />
                      </Typography>
                      <Typography variant="body2">{contact.id}</Typography>
                    </Box>

                    <Box className={classes.details}>
                      <Typography variant="h6">
                        <FormattedMessage id="contacts.firstname" />
                      </Typography>
                      <Typography variant="body2">{contact.firstName}</Typography>
                    </Box>

                    <Box className={classes.details}>
                      <Typography variant="h6">
                        <FormattedMessage id="contacts.lastname" />
                      </Typography>
                      <Typography variant="body2">{contact.lastName}</Typography>
                    </Box>

                    <Box className={classes.details}>
                      <Typography variant="h6">
                        <FormattedMessage id="contacts.countryCode" />
                      </Typography>
                      <Typography variant="body2">{`+${contact.countryCode}`}</Typography>
                    </Box>

                    <Box className={classes.details}>
                      <Typography variant="h6">
                        <FormattedMessage id="contacts.phoneNumber" />
                      </Typography>
                      <Typography variant="body2">{contact.phoneNumber}</Typography>
                    </Box>
                  </div>
                  <div className={classes.accordionDetailsRight}>
                    <Fab
                      className={classes.editKey}
                      aria-label={"edit"}
                      color="secondary"
                      component={Link} to={`/edit/${contact.id}`}
                    >
                      <FormattedMessage id="edit" />
                    </Fab>

                    <Fab
                      className={`${classes.deleteKey} ${isToBeDeleted ? classes.deleteKeyMarked : ''}`}
                      aria-label={"delete"}
                      onClick={() => onDeleteFabClick(contact.id)}
                    >
                      {isToBeDeleted ? <DeleteIcon /> : <FormattedMessage id="delete" /> }
                    </Fab>
                  </div>

                </AccordionDetails>
              </Accordion>
            );
          })}
        </Container>
      )}
      {!!markedForDeletion.length && <Container className={`${classes.deleteMarkedButtonWrapper} bottom`}>
        <Button variant="contained" className={classes.deleteMarkedButton} onClick={onDeleteMarked}>
          <FormattedMessage id="delete.marked" />
        </Button>
      </Container>}
    </Container>
  );
};

export default withStyles(styles)(ContactsView);
