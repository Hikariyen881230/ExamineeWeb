import { Box,FormControlLabel,Checkbox } from "@mui/material";
import PropTypes from "prop-types";

export default function CheckboxCustomizeStyle({text,isChecked}) {
  return (
    <Box>
      <FormControlLabel
        control={<Checkbox />}
        label={text}
        sx={{ display: "flex", justifyContent: "center" }}
        onChange={(e)=>{isChecked(e.target.checked)}}
      />
    </Box>
  );
}

CheckboxCustomizeStyle.propTypes={
    text:PropTypes.string.isRequired,
    isChecked:PropTypes.func.isRequired
}
