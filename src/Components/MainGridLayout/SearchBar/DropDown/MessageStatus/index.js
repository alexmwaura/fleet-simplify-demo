import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

export default function MessageStatus() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel style={{ marginLeft: "30px", marginTop: "2px" }}>
          Message Statuses
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          style={{
            borderRadius: 10,
            position: "relative",
            border: "1px solid #ced4da",
            fontSize: 16,
            padding: "10px 26px 10px 12px",
          }}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value={10}>Read Messages</MenuItem>
          <MenuItem value={20}>Unread Messages</MenuItem>
          <MenuItem value={30}>Opened but not responded</MenuItem>
          <MenuItem value={40}>Ongoing Discussion</MenuItem>
          <MenuItem value={50}>Ended Discussion</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
