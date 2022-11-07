import React from 'react';
import './clients.css';

function Clients() {
    return (
        <div>
            <div className='clients container'>
                <div className='clients__content'>
                    <h2 className='clients__title'>What Clients Say</h2>
                    <p className='clients__text'>Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <ul className='clients__list'>
                    <li className='clients__item'>
                        <div className='clients__imgs-wrapper'>
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector-1.svg" alt="star" />
                        </div>
                        <p className='clients__item-text'>Product helps you see how many
                            more days you need to work to
                            reach your financial goal.
                        </p>
                        <div className='designer-info'>
                            <img className='designer-info__img' src="./images/wahid-ari-gril.svg" alt="Wahid Air" />
                            <div className='designer-info__content'>
                                <h3 className='designer-info__title'>Wahid Ari</h3>
                                <p className='designer-info__text'>Designer</p>
                            </div>
                        </div>
                    </li>

                    <li className='clients__item'>
                        <div className='clients__imgs-wrapper'>
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector-1.svg" alt="star" />
                        </div>
                        <p className='clients__item-text'>Product helps you see how many
                            more days you need to work to
                            reach your financial goal.
                        </p>
                        <div className='designer-info'>
                            <img className='designer-info__img' src="./images/wahid-air-me.svg" alt="Wahid Air" />
                            <div className='designer-info__content'>
                                <h3 className='designer-info__title'>Wahid Ari</h3>
                                <p className='designer-info__text'>Designer</p>
                            </div>
                        </div>
                    </li>

                    <li className='clients__item'>
                        <div className='clients__imgs-wrapper'>
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector.svg" alt="star" />
                            <img className='clients__img' src="./images/Vector-1.svg" alt="star" />
                        </div>
                        <p className='clients__item-text'>Product helps you see how many
                            more days you need to work to
                            reach your financial goal.
                        </p>
                        <div className='designer-info'>
                            <img className='designer-info__img' src="./images/wahid-ari.svg" alt="Wahid Air" />
                            <div className='designer-info__content'>
                                <h3 className='designer-info__title'>Wahid Ari</h3>
                                <p className='designer-info__text'>Designer</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Clients;