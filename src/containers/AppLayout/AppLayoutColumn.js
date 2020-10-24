import React, { Component } from 'react';

class AppLayoutColumn extends Component {
    render() {
        return (
            <div className="h-screen flex flex-col justify-between">
                <header className="h-12 bg-gray-500">header</header>
                <main className="bg-indigo-500">main</main>
                <footer className="bg-purple-500">footer</footer>
            </div>
        )
    }
}

export default AppLayoutColumn;
