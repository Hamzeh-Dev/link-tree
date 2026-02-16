"use client"

import Link from 'next/link';
import React from 'react';
import { LinksProps } from '../Container';

const LinkCard = ({ link, index } : { link: LinksProps, index: number }) => {
    return (
        <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 ${link.color} transform hover:scale-[1.02] hover:shadow-md animate-fade-in-up`}
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 text-gray-700 dark:text-gray-300">{link.icon}</div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{link.title}</h3>
                    {link.subtitle && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{link.subtitle}</p>
                    )}
                </div>
                <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
            </div>
        </Link>
    )
}

export default LinkCard;