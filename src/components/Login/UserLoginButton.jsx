import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export default function UserLoginButton({ text, style }) {
    return (
        <Button
            variant="contained"
            sx={(theme) => ({
                ...theme.typography.button,
                // allow `style` to be either an object or a function(theme) => object
                ...(typeof style === 'function' ? style(theme) : style),
            })}
        >
            {text}
        </Button>
    );
}

UserLoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    // style can be an object or a function that receives the theme
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};