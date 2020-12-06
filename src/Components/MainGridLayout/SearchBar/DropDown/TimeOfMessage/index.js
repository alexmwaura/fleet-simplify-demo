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

export default function TimeOfMessage() {
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
          Time of Messages
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Last Hour</MenuItem>
          <MenuItem value={20}>12 hrs ago</MenuItem>
          <MenuItem value={30}>Today</MenuItem>
          <MenuItem value={40}>This Week</MenuItem>
          <MenuItem value={50}>This Month</MenuItem>
          <MenuItem value={60}>This Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
