import { Box, Stack } from "@mui/material";
import ButtonCustmize from "../Common/ButtonCustmize";
import PropTypes from "prop-types";

export default function ModalButton({footerType, handlerClick, close}) {
  switch (footerType) {
    case 0:
      return null;
    case 1:
      return (
        <ButtonCustmize onClick={handlerClick} autoFocus>
          確定
        </ButtonCustmize>
      );
    case 2:
      return (
        <Stack direction="row" spacing={2} justifyContent="center"  width="80%"> 
          <ButtonCustmize  onClick={close} height={45} color={(theme)=>theme.palette.secondary.lightGrey}>取消</ButtonCustmize>
          <ButtonCustmize  onClick={handlerClick} height={45} autoFocus>
            確定
          </ButtonCustmize>
        </Stack>
      );
  }
}


ModalButton.propTypes = {
  footerType: PropTypes.oneOf([0, 1, 2]).isRequired, // 0: 無按鈕, 1: 單按鈕, 2: 雙按鈕
  handlerClick: PropTypes.func,                       // 點擊「確定」按鈕的回調
  close: PropTypes.func,                              // 點擊「取消」按鈕的回調
};