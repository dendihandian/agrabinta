import React, { Component, Fragment } from 'react';
import AppFooter from '../../components/AppFooter/AppFooter';
import AppHeader from '../../components/AppHeader/AppHeader';

class AppLayout extends Component {
    render() {
        return (
            <Fragment>
                <AppHeader/>

                <main>
                    {this.props.children}
                </main>

                <AppFooter/>
            </Fragment>
        )
    }
}

export default AppLayout;
