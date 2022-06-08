import React from 'react';
import "../styling/homescreen.css"
import NavBarHome from '../Components/NavBarHome';
const HomeScreen = () => {
    return (
        <div className='homeScreenContainer'>
            <div className='greetingHomeScreen'>
            <NavBarHome />
                <div className='GreetingPlusInput'>
                        <div>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                        </div>
                        <div className='our-story-card-subtitle'>
                            <p>Watch anywhere. Cancel anytime.</p>
                        </div>
                        <div className='emailformtitle'>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='EnterEmailInputBtn'>
                            <div className='InputCont'>
                                <input type="text" placeholder='Email address' />
                            </div>
                            <div className='btnCont'>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      
    );
}

export default HomeScreen;
