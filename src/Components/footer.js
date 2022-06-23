import React from 'react';
import "../styling/footer.css"

const Footer = () => {
    
    return (
        <div className='ContactContainer'>
            <div>
                <p className='me'>
                    Netflix clone created with:
                    React, React Router v6, redux to manage 
                    user login status, firebase for managing user
                    login and user register.
                </p>
            </div>
            <div className="ContainerIcon">
                <div id="social-test">
                    <p>Take a look at my socials :) </p>
                    <ul class="social">
                        <li>
                            <a href="https://github.com/AxelTur-Springer/ReactRouterShopOdin"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/axel.turspringer/"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/axel.turspringer/"> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Buisness+inquiry&to=axel.turspringer@gmail.com&body=Hello+Axel+Tur+Springer"><i className="fa fa-envelope"></i></a>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;