"use client";

import { cn } from "../../utils/utils";
import PropTypes from 'prop-types';

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border.
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component.
 * @param children contains react node elements.
 */
export default function ShineBorder({
    borderRadius = 12,
    borderWidth = 3,
    duration = 14,
    color = "#000000",
    className,
    children,
}) {
    return (
        <div
            style={{
                "--border-radius": `${borderRadius}px`,
            }}
            className={cn(
                "relative grid min-h-[60px]  place-items-center rounded-[--border-radius] ",
                className,
            )}
        >
            <div
                style={{
                    "--border-width": `${borderWidth}px`,
                    "--border-radius": `${borderRadius}px`,
                    "--shine-pulse-duration": `${duration}s`,
                    "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
                }}
                className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
            ></div>
            {children}
        </div>
    );
}

ShineBorder.propTypes = {
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    duration: PropTypes.number,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
