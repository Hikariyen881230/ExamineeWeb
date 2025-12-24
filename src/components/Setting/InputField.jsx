import { Box, IconButton, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import PropTypes from "prop-types";


export default function InputField({ label, value, multiline = false }) {
  const [isEdit, setEdit] = useState(false);
  const handlerEdit = () => setEdit(true);
  const handlerCheck = () => setEdit(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: multiline ? "flex-start" : "center",
        mb: 2,
      }}
    >
      <Typography
        sx={{ width: 100, mr: 2, whiteSpace: "nowrap", fontWeight: "bold" }}
      >
        {label}
      </Typography>
      <TextField
        value={value}
        size="small"
        fullWidth
        multiline={multiline}
        rows={multiline ? 4 : 1}
        disabled={!isEdit}
        sx={(theme) => ({
          bgcolor: !isEdit
            ? theme.palette.secondary.disableTextBoxGrey
            : theme.palette.white.main, // textbox灰底
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.borderGrey,
          },
          color: isEdit ? theme.palette.fontColor.disableColor : theme.palette.fontColor.showColor, // 文字顏色
        })}
      />
      <IconButton
        sx={(theme) => ({
          ...theme.custom.setting.iconButtonStyle,
          color: theme.palette.error.main,
          border: `1px solid ${
            isEdit ? theme.palette.secondary.main : theme.palette.error.main
          }`,
        })}
        onClick={handlerEdit}
        disabled={isEdit}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        sx={(theme) => ({
          ...theme.custom.setting.iconButtonStyle,
          color: isEdit
            ? theme.palette.success.main
            : theme.palette.secondary.lightGrey,
          border: `1px solid ${
            isEdit ? theme.palette.success.main : theme.palette.secondary.main
          }`,
          // 增加一個設定：確保 hover 時顏色不會跳掉
          "&:hover": {
            borderColor: isEdit
              ? theme.palette.success.dark
              : theme.palette.secondary.main,
          },
        })}
        disabled={!isEdit}
        onClick={handlerCheck}
      >
        <CheckIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,        // 標籤文字
  value: PropTypes.string.isRequired,        // TextField 的值
  multiline: PropTypes.bool,                 // 是否多行
};