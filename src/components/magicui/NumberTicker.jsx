"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import PropTypes from 'prop-types'

import { cn } from "../../utils/utils";

export default function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
}) {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 200,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === "down" ? 0 : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    latest.toFixed(0)
                );
            }
        });
    }, [springValue]);

    return (
        <span
            className={cn(
                "inline-block tabular-nums  tracking-wider",
                className
            )}
            ref={ref}
        />
    );
}

NumberTicker.propTypes = {
    value: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(["up", "down"]),
    delay: PropTypes.number,
    className: PropTypes.string,
};