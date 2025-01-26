import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";

function MainBackground({ children, className }) {
    return (
        <div className="relative size-full before:absolute
        before:inset-0 before:bg-main before:bg-cover
        before:bg-no-repeat before:bg-center">
            <div className={cn("absolute z-[3] size-full backdrop-blur", className)}>
                {children}
            </div>
        </div>
    );
}


MainBackground.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default MainBackground;