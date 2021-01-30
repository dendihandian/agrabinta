import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Hero = ({t, ...props}) => {
    return (
        <section className="text-gray-700 body-font">
            <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">{t('title_1')}
                        <br className="hidden lg:inline-block" />{t('title_2')}
                    </h1>
                    <p className="mb-8 leading-relaxed">{t('subtitle')}</p>
                    <div className="flex justify-center">
                        <Link to="/map">
                            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">{t('go_to_map')}</button>
                        </Link>
                        {/* <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300">Button</button> */}
                    </div>
                </div>
                <div className="hidden w-5/6 md:block lg:max-w-md lg:w-full md:w-1/2">
                    {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                    <img className="object-cover object-center rounded" alt="hero" src="/images/hero-image.jpg" />                </div>
            </div>
        </section>
    )
}

export default withTranslation()(Hero);
