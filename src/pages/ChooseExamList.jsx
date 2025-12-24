import { Box, Typography, FormGroup, Button } from "@mui/material";
import RadioCustomizeGroup from "../components/Common/RadioCustomizeGroup";
import CandidateTitle from "../components/ChooseExamList/CandidateTitle";
import { useDispatch } from "react-redux";
import { setBannerText } from "../store/slice/LayoutSlice";
export default function ChooseExamList() {
  const dispatch=useDispatch();
  dispatch(setBannerText('測驗科目'));
  const subjects = [
    { value: "chinese", label: "中文輸入技能認證" },
    { value: "japanese", label: "日文輸入技能認證" },
    { value: "english", label: "英文輸入技能認證" },
    { value: "numeric", label: "數字鍵輸入技能認證" },
  ];
  return (
    <Box
      sx={(theme) => ({
        ...theme.custom?.chooseExamPageStyle.content,
        flexDirection: "column",
      })}
    >
      <CandidateTitle />
      <Box>
        <Typography
          fontWeight="bold"
          fontSize={30}
          sx={{
            textAlign: "center",
            color: "#0070c0", // 根據圖片，使用深藍色
            mb: 1, // 增加標題下方的間距
            px: 4, // 與下方內容保持相同的左右內邊距
            maxWidth: { xs: "100%", md: "md", lg: "lg" },
            mx: "auto",
            letterSpacing: "0.2em",
          }}
        >
          請點選要進行測驗的科目
        </Typography>
        <FormGroup component="fieldset" sx={{ width: "100%" }}>
          <RadioCustomizeGroup RadioItem={subjects} />
        </FormGroup>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%", // 確保這個容器佔滿父容器的寬度
            mt: 3, // 增加頂部間距
          }}
        >
          <Button
            variant="contained"
            sx={(theme)=>({
              ...theme.custom?.chooseExamPageStyle.bigButtonOrange
            })}
          >
            下一步
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
