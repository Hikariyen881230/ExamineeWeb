import { Box, RadioGroup, Radio,FormControlLabel,Typography  } from "@mui/material";
import PropTypes from "prop-types";

export default function RadioCustomizeGroup({RadioItem}) {
  return (
    <>
      <RadioGroup
        aria-label="subject"
        name="RadioInfo"
        // value={selectedValue}
        // onChange={handleChange}
        // 讓選項列表居中
       sx={{
            maxWidth: {md:300}, 
            mx: 'auto', // 讓整個列表區塊水平居中
            width: '100%',
            px: 2, // 左右內邊距
        }}
      >
       <Box>
        
       </Box>
        {RadioItem.map((item) => {
          return( <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio color="default" />}
            label={
              <Typography variant="h6" sx={{ ml: 1, my: 1 }}>
                {item.label}
              </Typography>
            }
            sx={{
              width:"100%",
              // 調整每個選項的垂直間距
              mb: 1
            }}
          />)
        })}
      </RadioGroup>
    </>
  );
}

RadioCustomizeGroup.propTypes = {
  RadioItem: PropTypes.array.isRequired,
};
