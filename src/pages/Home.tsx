import {
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { User } from "../interfaces/UserInterface";

interface Props {}

function Home(props: Props) {
  const {} = props;
  const [name, setName] = React.useState<string>("");
  const [language, setLanguage] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("male");

  const history = useHistory();

  const user: User = {
    name,
    language,
    gender,
  };

  const navigateToExam = () => {
    history.push("/exam", {
      user: user,
    });
  };

  return (
    <div
      data-testid="home"
      style={{
        width: "720px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        label="Enter Your Name"
      />
      <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
        <FormControlLabel value="male" label="Male" control={<Radio />} />
        <FormControlLabel value="female" label="Female" control={<Radio />} />
        <FormControlLabel value="others" label="Others" control={<Radio />} />
      </RadioGroup>

      <Typography>Language</Typography>
      <Select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <MenuItem value="Java">Java</MenuItem>
        <MenuItem value="Javascript">Javascript</MenuItem>
        <MenuItem value="Node JS">Node JS</MenuItem>
      </Select>
      <br />
      <br />
      <Button onClick={() => navigateToExam()} variant="contained">
        Start
      </Button>
    </div>
  );
}

export default Home;
