import React, { Component, Fragment } from 'react';
import AppFooter from '../../components/AppFooter/AppFooter';
import AppHeader from '../../components/AppHeader/AppHeader';

class AppLayout extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader/>

                <main className="flex-grow">
                    {this.props.children}
                </main>

                <AppFooter/>

                {/* <header class="p-4 bg-red-500 text-center text-white font-bold">Header</header> */}
                {/* <main class="h-64 bg-red-600 flex items-center flex-grow justify-center text-white">Main</main> */}
                {/* <footer class="p-4 bg-red-500 text-center text-white font-bold">Footer</footer> */}
            </Fragment>
        )
    }
}

export default AppLayout;
