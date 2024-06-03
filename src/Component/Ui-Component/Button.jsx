import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IoLogoWindows, IoLogoApple, IoLogoAndroid } from "react-icons/io5";

function ButtonC({ text, to, onClick, icon, type = "button", ...props }) {
    const renderIcon = () => {
        switch (icon) {
            case "windows":
                return <IoLogoWindows size={24} />;
            case "apple":
                return <IoLogoApple size={24} />;
            case "android":
                return <IoLogoAndroid size={24} />;
            default:
                return null;
        }
    };

    return (
        <div className="text-center text-lg-start">
            <Button
                className="fathena-btn mt-3 mt-lg-4"
                variant="contained"
                component={Link}
                to={to}
                onClick={onClick}
                startIcon={renderIcon()}
                type={type}
                {...props}
            >
                {text}
            </Button>
        </div>
    );
}

export default ButtonC;
