import { Typography, Box } from "@mui/material";
import InputGroup from "../Common/InputGroup";
import UserLoginButton from "../Login/UserLoginButton";

export default function LoginInput() {
  return (
    <Box sx={{maxWidth:"80%"}}>
       <Typography fontSize="1.3rem" mt={6}>
          考生帳號
        </Typography>
        <InputGroup/>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <UserLoginButton
            text="清除重填"
            // read style object from theme.custom.login.buttonClear
            style={(theme) => theme.custom?.loginStyle?.buttonClear}
            />
            <UserLoginButton
            text="確認送出"
            style={(theme) => theme.custom?.loginStyle?.buttonSubmit}
            />
          </Box>
    </Box>
  );
}
