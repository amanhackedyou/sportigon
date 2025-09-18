"use client"

import { useEffect, useState } from "react";

const SvgImage = ({ src, className = "" }: { src: string; className?: string }) => {
    const [svgContent, setSvgContent] = useState("");

    useEffect(() => {
        if (!src) return;

        fetch(src)
            .then((res) => res.text())
            .then((text) => {
                // Remove ALL hardcoded fills, strokes, styles
                const cleaned = text
                    .replace(/fill="[^"]*"/gi, 'fill="currentColor"')
                    .replace(/stroke="[^"]*"/gi, 'stroke="currentColor"');

                setSvgContent(cleaned);
            })
            .catch((err) => {
                console.error(`Failed to load SVG: ${src}`, err);
            });
    }, [src]);

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
        />
    );
};

export default SvgImage;
