import { Typography, Paper, Box, TextField, Grid, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import PropTypes from "prop-types";
export default function InputGroup({placeholder}){
    return (
         <Box sx={{display:"flex",alignItems:"stretch",mb:3}}>
            <TextField
            placeholder={placeholder}
            variant="outlined"
            fullWidth
           sx={{
                    flexGrow: 1, // 佔滿所有剩餘寬度
                    // 覆寫 MuiOutlinedInput-root 類別來自訂樣式
                    '& .MuiOutlinedInput-root': {
                        // 1. 調整高度以實現「細」的效果
                        height: 40, // 💡 設置一個較低的高度，例如 40px
                        // 2. 調整圓角以實現「長」的視覺效果 (與圖標緊密連接)
                        borderTopRightRadius: 0, 
                        borderBottomRightRadius: 0,     
                        // 確保內部的 input 元素垂直居中
                        '& input': {
                            paddingY: 1, // 調整垂直內邊距以微調文字位置
                        }
                    },
                    // 確保 TextField 的外層邊界線樣式沒有額外的間距
                    '& .MuiInputBase-input': {
                        padding: '10px 14px', // 標準 MUI 小尺寸的 padding
                    }
                }}
            >
            </TextField>
            <Box sx={{
                    bgcolor: 'error.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48, // 確保寬度與圖標大小匹配
                    // 確保高度與 TextField 高度一致
                    height: 40, 
                    cursor: 'pointer',
                    
                    // 設置圓角，與 TextField 形成對比
                    borderTopLeftRadius: 0, 
                    borderBottomLeftRadius: 0, 
                    borderTopRightRadius: 4, 
                    borderBottomRightRadius: 4, 
                }}>

            <PersonIcon sx={{color:"#fff"}}/>
            </Box>
        </Box> 
    );
}

InputGroup.propTypes={
    placeholder: PropTypes.string,
}