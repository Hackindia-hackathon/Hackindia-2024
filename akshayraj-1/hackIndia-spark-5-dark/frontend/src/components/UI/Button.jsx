import PropTypes from "prop-types";
import {motion} from "framer-motion";
import cn from "../../utils/cn.util.js";

function Button({type = "button", variant = "primary", size = "md", label, onClick, href, className}) {

    const Element = type === "button" ? motion.button : motion.a;

    const styles = {
        text: cn(
            size === "sm" && "text-xs px-3 py-1.5",
            size === "md" && "text-[0.81rem] px-5 py-2",
            size === "lg" && "text-[1rem] px-5 py-3"
        ),
        primary: cn("text-primary font-medium bg-accent rounded-md"),
        secondary: "text-primaryText font-medium border-2 border-tertiary hover:bg-accent hover:text-primary bg-secondary/80 rounded-md",
        tertiary: "text-primaryText font-medium bg-transparent rounded-md border border-tertiary hover:bg-tertiary/80 transition"
    }

    return (
        <Element className={cn(styles.text, styles[variant], className)}
                 href={href}
                 onClick={onClick}
                 whileTap={{ scale:0.99, y: 1, transition: { duration: 0.05, ease: "easeInOut" } }}
        >
            {label}
        </Element>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "a"]),
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string
}

export default Button;