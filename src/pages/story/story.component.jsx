import React from 'react'
import { StoryPageContainer } from './story.styles'
import EmailForm from '../../components/email-form/email-form.component'
import logo from '../../assets/AltLogo.png';

const  StoryPage = () => {
    return (
        <StoryPageContainer>
            <h1>Our Story</h1>
            <img src={logo} alt="alt-logo"/>
            <div className="text-container">
                <h3>Sustainable fashion for a planet in deep waters</h3>
                <p className="top-quote">
                    Millions of years ago, a fish got the great idea to develop its fleshy fins into limbs. Suddenly, our distant ancestor could walk on this new cool place called “land.” 
                </p>
                <p className="bottom-quote">
                    — 375 million years later, we’ve become A LOT better at having legs and arms. But we’ve also become A LOT worse at thinking about the oceans we came from…
                </p>
                <div className="question-section">
                    <p className="question">
                        Why are we talking about prehistoric leg-fish-thingies? 
                    </p>
                    <p className="answer">
                        Because water gave us life and allowed us to evolve from tiny gooey aquatic organisms into modern human beings. So isn’t it time we started giving back to the oceans we owe literally EVERYTHING to? 
                    </p>
                    <div className="quote">
                        At Semi Aquatics, our mission is to inspire a sustainable lifestyle that would make our amphibious ancestors proud!
                    </div>
                    <div className="divider"></div>
                </div>
                <div className="question-section">
                    <p className="question">
                        Imagine if we could Reverse Evolution™
                    </p>
                    <p className="answer">
                        Well, that didn’t come out right… But imagine if we could reverse the negative environmental impact of human evolution. If we could return to the way our planet was when our semi aquatic ancestors first crawled on land. And let nature return to how it was before we started spoiling and polluting living conditions in our oceans. 
                    </p>
                    <div className="divider"></div>
                </div>
                <div className="question-section">
                    <p className="question">
                        Evolution stripped us naked!
                    </p>
                    <p className="answer">
                        Evolution quite literally took all that warm, cozy fur we used to be wrapped in. As a result humans had to produce our own “fur.” However, the way we have been manufacturing clothing has become one of most destructive industries in history. It pollutes our precious water with dyes and micro-particles, while cotton farming has caused us to clear forests on land.  
                    </p>
                    <div className="divider"></div>
                </div>
                <div className="question-section">
                    <p className="question">
                        Your Evolution Reversing Impact
                    </p>
                    <p className="answer">
                        Clothing looks great on you, but horrible in the oceans. That’s why we carefully source sustainable fabrics to craft hoodies, crewneck sweatshirts, sweatpants, shorts, and T-shirts made to be WORN over and over. By reversing your environmental impact and destructive consumer behaviour, you help allow the oceans to restore to the cradle of life they once were.  
                    </p>
                    <div className="divider"></div>
                </div>
                <div className="question-section">
                    <p className="question">
                        How does it work? 
                    </p>
                    <p className="answer">
                        Shopping for new clothing everyday is causing the fashion-related environmental disaster. Shopping the right day, is part of the solution. That’s why our collections are produced in limited numbers and only available on selected dates each month until they sell out. As a result, you receive high quality, sleek, minimal and timeless wardrobe stables. — And our planet gets a chance to recover without tonnes of apparel being dumped into landfills, rivers and oceans.  
                    </p>
                </div>

                <div className="join-our-cause">
                    <p>
                        To join our cause, sign up with your email to get notified when our next collection become available:
                    </p>
                    <EmailForm />
                </div>
                <div className="question-section">
                    <div className="divider"></div>

                </div>

            </div>
        </StoryPageContainer>
    )
}

export default StoryPage;