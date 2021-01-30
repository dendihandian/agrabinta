import React from 'react';

const AppFooter = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="flex items-center justify-center h-8 bg-gray-800">
            <p className="text-sm text-gray-600 hover:text-gray-400">{year} &copy; Dendi Handian</p>
        </footer>
    )
}

export default AppFooter;
