// components/Clients.jsx
import React from 'react';
import clients from '../../static.js';

export default function Clients() {
    return (
        <div className="text-textColor font-inter mt-10 border border-gray-300 ">
            <div>
                <h1 className="text-xl mb-1 ">Powering the world’s best product teams.</h1>
                <p className="text-xl">From next-gen startups to established enterprises.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-4xl mx-auto">
                {clients.map((client) => (
                    <img
                        key={client.id}
                        src={client.logo}
                        alt={client.alt}
                        className="w-20 h-20 mx-auto"
                    />
                ))}
            </div>
        </div>
    );
}
