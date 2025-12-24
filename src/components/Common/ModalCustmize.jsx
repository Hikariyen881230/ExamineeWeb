import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import  ModalButton  from '../Common/ModalButton';
import PropTypes from "prop-types";

/**
 * @param {boolean} open - 是否開啟 Dialog
 * @param {function} onClose - 關閉事件
 * @param {object} model - { title: string, content: JSX }
 */
export default function ModalCustmize({ open, onClose, model,onClick }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          minHeight: 300,   //  整體高度
          width: 420,       //  固定寬度（可調）
          borderRadius: 2,
        },
      }}
    >
      {/* Title */}
      <DialogTitle id="alert-dialog-title" sx={{ textAlign: "center" }}>
        {model.title}
      </DialogTitle>

      {/* Content */}
      <DialogContent
        id="alert-dialog-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt:0,
          pb:0
        }}
      >
        {model.content}
      </DialogContent>

      {/* Actions */}
      <DialogActions
        sx={{
          justifyContent: "center",
          pb: 8,
          gap: 2,
        }}
      >
        <ModalButton close={onClose} handlerClick={onClick} footerType={model.footerType}/>
      </DialogActions>
    </Dialog>
  );
}


ModalCustmize.propTypes = {
  open: PropTypes.bool.isRequired, // 是否開啟 Dialog
  onClose: PropTypes.func.isRequired, // 關閉事件
  onClick: PropTypes.func, // 確認/操作按鈕事件
  model: PropTypes.shape({
    title: PropTypes.string,      // Dialog 標題
    content: PropTypes.node.isRequired,      // 內容，可以是 JSX
    footerType: PropTypes.string,            // 傳給 ModalButton 的 footerType
  }).isRequired,
};