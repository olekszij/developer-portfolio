'use client';

import React from 'react';
import { Permanent_Marker } from "next/font/google";

const marker = Permanent_Marker({
    weight: '400',
    subsets: ['latin']
});

const CrumpledNameTag = () => {
    return (
        <div className="w-[400px] mx-auto p-4">
            <div className="relative transform hover:-translate-y-1 transition-all duration-300">
                {/* Shadow effect */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/10 blur-sm -z-10 rotate-2"></div>

                {/* Main tag with white border */}
                <div className="p-[5px] bg-white rotate-2 rounded">
                    <div className="bg-red-600 relative rounded"
                        style={{
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 2px 6px rgba(0,0,0,0.1)'
                        }}>
                        {/* Paper texture */}
                        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('/textures/white-paper-texture.jpg')] bg-cover"></div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="space-y-1">
                                <h1 className="text-white text-5xl font-extrabold tracking-wide text-center">HELLO</h1>
                                <p className="text-white text-xl font-bold tracking-wider text-center">MY NAME IS</p>
                            </div>

                            {/* Name field */}
                            <div className="mt-4 bg-white border-2 border-red-700 p-4 relative"
                                style={{
                                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                {/* Field texture */}
                                <div className="absolute inset-0 opacity-50 mix-blend-multiply bg-[url('/textures/white-paper-texture.jpg')] bg-cover"></div>

                                <div className={`${marker.className} text-black text-6xl text-center relative`}>
                                    Alex
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