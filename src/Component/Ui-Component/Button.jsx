import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ButtonC({ text, to, onClick, ...props }) {
    return (
        <div className="text-center text-lg-start">
            <Button
                className="fathena-btn mt-3 mt-lg-4"
                variant="contained"
                component={Link}
                to={to}
                onClick={onClick}
                {...props}
            >
                {text}
            </Button>
        </div>
    );
}

export default ButtonC;

