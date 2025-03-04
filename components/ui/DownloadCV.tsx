"use client";

import React from "react";
import Button from "../Button";

interface DownloadCVProps {
    fileUrl: string;
    fileName: string;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ fileUrl, fileName }) => {
    const handleDownload = () => {
        if (!fileUrl) {
            console.error("Download URL is missing.");
            return;
        }

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.rel = "noopener noreferrer"; // Security best practice
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Cleanup
    };

    return (
        <Button
            title="My CV"
            icon={<img src="assets/download.svg" alt="Download CV" />}
            position="right"
            handleClick={handleDownload}
        />
    );
};

export default DownloadCV;
