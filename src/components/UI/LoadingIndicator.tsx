import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type LoadingIndicatorProps = {
    onInView?: () => void;
    onOutView?: () => void;
    /** Intersection threshold (0..1). Default 0.1 */
    threshold?: number;
    /** Root margin (CSS margin syntax). Default "0px" */
    rootMargin?: string;
    className?: string;
    spinnerSizeClass?: string;
};

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    onInView,
    onOutView,
    threshold = 0.1,
    rootMargin = "0px",
    className = "",
    spinnerSizeClass = "w-9 h-9",
}) => {
    const { ref, inView } = useInView({
        threshold,
        rootMargin,
        triggerOnce: false, // allow multiple enter/exit events
    });

    useEffect(() => {
        if (inView) {
            onInView?.();
        } else {
            onOutView?.();
        }

        return () => { };
    }, [inView, onInView, onOutView]);

    return (
        <div
            ref={ref}
            role="status"
            className={`flex items-center justify-center p-3 ${className}`
            }
        >
            <div
                className={`inline-block rounded-full border-4 border-gray-200 border-t-gray-700 ${spinnerSizeClass} animate-spin`}
            />
            < span className="sr-only" > Loading…</span>
        </div>
    );
};

export default LoadingIndicator;
