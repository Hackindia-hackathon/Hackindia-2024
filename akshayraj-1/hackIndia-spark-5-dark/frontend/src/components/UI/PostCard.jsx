import {motion, useScroll, useTransform} from "framer-motion";
import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";
import {useRef} from "react";
import {FaUser} from "react-icons/fa";

function PostCard({ id, owner, timestamp, content, image, upVotes, downVotes, onClick, styles }) {

    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        smooth: true,
        offset: ["0 1", "1 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            className={cn("relative flex flex-col gap-2 bg-secondary/80 h-auto rounded-xl px-4 py-4 border-2 border-tertiary shadow")}
            style={{ opacity: opacityProgress, scale: scaleProgress }}
        >
            <div className="flex items-start justify-start gap-3">
                <FaUser className="size-11 text-tertiaryText rounded-full border-2 border-tertiary bg-secondary p-2"/>
                <div className="flex flex-col items-start gap-1">
                    <p className="text-[0.8rem] text-primaryText truncate max-w-32">{owner}</p>
                    <p className="text-xs text-tertiaryText font-medium">{new Date(timestamp * 1000).toLocaleString()}</p>
                </div>
            </div>
            {
                content && <p className="text-base text-primaryText mt-2">{content}</p>
            }
            {
                image && <img className="h-96 aspect-square object-cover rounded-xl" src={image} alt="image"/>
            }
        </motion.div>
    );
}

PostCard.propTypes = {
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    content: PropTypes.string,
    image: PropTypes.string,
    upVotes: PropTypes.number,
    downVotes: PropTypes.number,
    onClick: PropTypes.func
}

export default PostCard;