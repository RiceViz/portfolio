"use client";

import React, { useEffect, useState } from "react";

export const LoadingBar = ({ delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState<string>("");

    useEffect(() => {
        const max = 100;
        const steps = 20;
        let loading = 1;

        const animateStep = () => {
            if (loading > max / steps) return;

            let progress = "";
            let numSpaces = "     ";
            for (let i = 0; i < loading; i++) {
                progress += "▮";
                numSpaces = numSpaces.substring(0,numSpaces.length - 1);
            }

            setDisplayedText(`Loading: [ ${progress} ${numSpaces} ${loading * steps}% ]`);
            loading++;

            const nextDelay = Math.floor(Math.random() * 300) + 300; // 300–600 ms
            setTimeout(animateStep, nextDelay);
        };

        const startTimeout = setTimeout(animateStep, delay);

        // Cleanup
        return () => clearTimeout(startTimeout);
    }, []);

    return <div>{displayedText}</div>;
};