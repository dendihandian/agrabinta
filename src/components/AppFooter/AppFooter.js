import React from 'react';

const AppFooter = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="h-8 bg-gray-800 flex justify-center items-center">
            <p className="text-sm text-gray-600">{year} &copy; Dendi Handian</p>
        </footer>
    )
}

export default AppFooter;
