import React from 'react';
import './advbanner.css';

function AdvBanner() {
    return (
        <div>
            <div className='advbanner container'>
                <div className='advbanner__wrapper'>
                    <div className='advbanner__content'>
                        <h2 className='advbanner__title'>
                            Join 100 Compannies who <br /> boost their business with <br /> Product
                        </h2>
                        <button className='advbanner__btn'>Get This</button>
                    </div>
                    <img className='adbanner__img' src="/images/screen.svg" alt="screen" />
                </div>
            </div>
        </div>
    )
}
export default AdvBanner;