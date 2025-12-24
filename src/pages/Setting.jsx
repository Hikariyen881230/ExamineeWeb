import { Box, Grid, Typography, Divider, Stack, Checkbox, Button } from "@mui/material";
import InputField from "../components/Setting/InputField";
import ButtonCustmize from "../components/Common/ButtonCustmize";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBannerText } from "../store/slice/LayoutSlice";
export default function Setting() {
  const [isSubmit, setSubmit] = useState(false);
  const dispatch=useDispatch();
  dispatch(setBannerText('基本資料'));
  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={5}>
          <Grid sx={{ md: 5 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              個人基本資料
            </Typography>
            <InputField label="登入帳號" />
            <InputField label="姓名" />
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", md: 1 }}>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid sx={{ md: 6 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              個人通訊資料
            </Typography>
            <InputField label="連絡電話" />
            <InputField label="電子郵件" />
            <InputField label="通訊地址" multiline={true} />
          </Grid>
        </Grid>
      </Stack>
      <Stack
        direction="row"
        sx={{ justifyContent: "center", maxWidth: "100%", mt: 5 }}
      >
        <Checkbox
          onChange={(e) => {
            setSubmit(e.target.checked);
          }}
        />
        <Typography sx={{ mt: 1 }}>我確認以上所提供的資料皆正確</Typography>
      </Stack>
      <Stack mt={4} direction="row" sx={{ justifyContent: "center" }}>
        <ButtonCustmize
          variant="contained"
          width="30%"
          disabled={!isSubmit}
          overrideDisabled
          borderRadius={2}
        >
          <Typography  color="#fff">
            下一步
          </Typography>
        </ButtonCustmize>
      </Stack>
    </Box>
  );
}
