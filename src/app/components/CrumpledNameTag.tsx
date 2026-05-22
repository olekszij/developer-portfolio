'use client';

import React from 'react';
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    preload: false,
});

const CrumpledNameTag = () => {
    return (
        <div className="w-full max-w-[400px] mx-auto p-3 sm:p-4">
            <div className="relative transform hover:-translate-y-1 transition-all duration-300">
                {/* Shadow effect */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/10 blur-sm -z-10 rotate-2"></div>

                {/* Main tag with white border */}
                <div className="p-[5px] bg-white rotate-2 rounded">
                    <div className="bg-red-600 relative rounded"
                        style={{
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 2px 6px rgba(0,0,0,0.1)'
                        }}>

                        {/* Content */}
                        <div className="p-6">
                            <div className="space-y-1">
                                <div className="text-white text-4xl sm:text-5xl font-extrabold tracking-wide text-center">HELLO</div>
                                <p className="text-white text-lg sm:text-xl font-bold tracking-wider text-center">MY NAME IS</p>
                            </div>

                            {/* Name field */}
                            <div className="mt-4 bg-white border-2 border-red-700 p-4 relative"
                                style={{
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                                }}>

                                <div className={`${marker.className} text-black text-5xl sm:text-6xl text-center relative`}>
                                    Olek
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrumpledNameTag; 
