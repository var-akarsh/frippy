"use client";
import React, { useState, useEffect } from 'react';

const DatashowSection = () => {
    const [reviewCount, setReviewCount] = useState(0);
    const [sessionCount, setSessionCount] = useState(0);
    const [peerCount, setPeerCount] = useState(0);
    const [storyCount, setStoryCount] = useState(0);

    return (
        <div className="flex justify-center items-center p-14 gap-16">
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold flex justify-center">4.6</h1>
                <p>80K Reviews</p>
            </div>
            <div className="h-6 w-1 bg-purple-950"></div>
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold flex justify-center">3M</h1>
                <p>Successfull Sessions</p>
            </div>
            <div className="h-6 w-1 bg-purple-950"></div>
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold flex justify-center">2K+</h1>
                <p>Great Peers</p>
            </div>
            <div className="h-6 w-1 bg-purple-950"></div>
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold flex justify-center">5k+</h1>
                <p>Success Stories</p>
            </div>
        </div>
    )
}

export default DatashowSection;
