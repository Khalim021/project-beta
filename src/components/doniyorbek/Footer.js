import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <div className='footer__wrapper'>
                        <dir className='footer__logo'>
                            <a className='footer__logo-link' href="/">
                                <img src="/images/logo.svg" alt="" />
                            </a>
                            <ul className='footer__socials'>
                                <li className='footer__social'>
                                    <a href="/">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 2.01611H7C4.23858 2.01611 2 4.25469 2 7.01611V17.0161C2 19.7775 4.23858 22.0161 7 22.0161H17C19.7614 22.0161 22 19.7775 22 17.0161V7.01611C22 4.25469 19.7614 2.01611 17 2.01611Z" stroke="#02897A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 11.3862C16.1234 12.2184 15.9813 13.0684 15.5938 13.8152C15.2063 14.562 14.5932 15.1676 13.8416 15.5458C13.0901 15.9241 12.2385 16.0558 11.4078 15.9221C10.5771 15.7884 9.80977 15.3963 9.21485 14.8013C8.61993 14.2064 8.22774 13.439 8.09408 12.6084C7.96042 11.7777 8.09208 10.9261 8.47034 10.1745C8.8486 9.42302 9.4542 8.80991 10.201 8.42241C10.9478 8.03491 11.7978 7.89276 12.63 8.01617C13.4789 8.14206 14.2649 8.53763 14.8717 9.14448C15.4785 9.75132 15.8741 10.5372 16 11.3862Z" stroke="#02897A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.5 6.51611H17.51" stroke="#02897A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>

                                <li className='footer__social'>
                                    <a href="/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#02897A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </a>
                                </li>

                                <li className='footer__social'>
                                    <a href="/">
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z" stroke="#02897A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </dir>

                        <ul className='footer__list'>
                            <h4 className='footer__title'>Resource</h4>
                            <li className='footer__item'>
                                <a href="/">About Us</a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">Blog</a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">Contact</a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">FAQ</a>
                            </li>
                        </ul>

                        <ul className='footer__list'>
                            <h4 className='footer__title'>Resource</h4>
                            <li className='footer__item'>
                                <a href="/">Disclaimer</a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">Financing</a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">Privacy Policy
                                </a>
                            </li>
                            <li className='footer__item'>
                                <a href="/">Terms of Service</a>
                            </li>
                        </ul>

                        <form className='form' action="/action_page.php">
                            <h4 className='form__title'>knowing you're always on the best energy deal.
                            </h4>
                            <label htmlFor="text"></label>
                            <input type="text" name="text" id="text" />
                            <div className='form__link'>
                                <a href="/">Sign up Now</a>
                            </div>
                        </form>
                    </div>

                    <dir className='footer__span'>
                        <span className='footer__span-text'>Made With Love By Figmaland All Right Reserved </span>
                    </dir>
                </div>
            </footer>
        </div>
    )
}

export default Footer;