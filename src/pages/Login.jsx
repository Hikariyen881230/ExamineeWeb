import { Grid,Box,Typography,Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import LoginInput from "../components/Login/LoginInput";
import { setBannerText } from "../store/slice/LayoutSlice";

export default function Login(){
    const dispatch=useDispatch();
    dispatch(setBannerText('登入'));
    return (
        <>
            <Grid container spacing={4} alignItems="stretch" sx={{ width: '100%' }}>
                <Grid  size={{ md: 5}}>
                    <Box sx={{ ml: 20 }}>
                    <Typography
                        variant="h4"
                        mb={2}
                        mt={6}
                        color="text.secondary"
                        fontSize="1.75rem"
                        sx={{ display: 'inline-block', borderBottom: '1px solid' }}
                    >
                        考前注意事項
                    </Typography>
                   <Box sx={{ml:2}}>
                    <Typography variant="body2" color="text.secondary">
                        請務必關閉手機，違反考試規則者，以零分計算。<br />
                        請確認已攜帶有效身分證件入場。
                    </Typography>
                    </Box>
                    </Box>
                </Grid>
                <Grid sx={{md:1, display:"flex", justifyContent:"center"}}>
                    <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid  size={{ md: 6 }}>
                    <LoginInput />
                    <Typography color="red" sx={{fontWeight:"bold",fontSize:22,mt:2}}>雲端測驗系統沒該考生資料，請重新輸入或聯絡監視考場</Typography>
                </Grid>
            </Grid>
        </>
    );
}