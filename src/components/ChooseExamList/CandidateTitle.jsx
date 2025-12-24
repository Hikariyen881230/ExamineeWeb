import { Box,Typography,Divider } from "@mui/material";

export default function CandidateTitle(){
    return (
        <>
            <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                      mt: 5,
                      maxWidth: { xs: "100%", md: 600 , xl:800  },
                      mx: "auto",
                      px: 2,
                    }}
                  >
                    <Typography variant="body1" fontWeight="bold" fontSize={18}>
                      登入帳號 : A123456789
                    </Typography>
                    <Typography variant="body1" fontWeight="bold" fontSize={18}>
                      姓名 : 郝成績
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      // 💡 保持與上方文字區塊相同的寬度設定
                      maxWidth: { xs: "100%", md: 600 ,xl:800 },
                      mx: "auto",
                      px: 2, // 💡 應用相同的左右內邊距
                    }}
                  >
                    <Divider
                      sx={{
                        mb: 4,
                        borderBottomWidth: 1, // 設定線條粗細 (例如 2px)
                        // 💡 關鍵修正：直接設定 borderColor 為 'black'
                        borderColor: "black",
                        // 確保線條樣式為 solid (預設通常為 solid)
                        borderStyle: "solid",
                      }}
                    />
                </Box>
        </>
    )
}