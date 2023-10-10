import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css'

export default function Profile() {
    const [textIndex, setTextIndex]= useState(0);
    const textOptions=[
        'React/React Native Dev 👩‍💻',
        'Ethusiastic Dev 📱',
        'Full Stack Developer 🖥🖥',
        'Cross Platform Dev 💻📱',
        'MERN Stack Dev 🌐',
    ];

    const [displayText, setDisplayText]= useState(textOptions[0]);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTextIndex((prevIndex)=> (prevIndex+1) % textOptions.length);
        }, 2000);
        return()=>clearInterval(interval);
    })

    useEffect(()=>{
        const targetText = textOptions[textIndex];
        let currentIndex= 0;

        const typewriterInterval =setInterval(()=>{
            if (currentIndex<= targetText.length) {
                setDisplayText(targetText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typewriterInterval);
                
            }
        }, 50);
        return ()=> clearInterval(typewriterInterval);
    }, [textIndex])


    return (
        <div className='profileContainer'>
        
            <div className='profileParent'>
                <div className='profileDetails'>
                    <div className='cols'>
                        <div className='cols-icons'>
                            <a href='https://mobile.facebook.com/home.php'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/bongani-sithole-00483b221/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://github.com/bMsithole19980?tab=repositories'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href='https://www.instagram.com/?hl=en'>
                                <i className='fa fa-instagram-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profileDetails-name'>
                        <span className='primaryText'>
                            {" "}
                            Hello , I'm <span className='HighlightedText'>Bongani Sithole</span>

                        </span>

                    </div>
                    <div className='ProfileDetail-role'>
                        <span className='primaryText'>
                            <h1>{displayText}</h1>
                            <span className='profile-role-tagline'>

                                A professional Full Stack developer is responsible for designing, building, and maintaining both the front-end (client-side) and back-end (server-side) components of web applications, ensuring their seamless functionality and user experience
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href='Bongani_Sithole CV.pdf' download='Bongani Sithole.pdf'>
                            <button className='btn highlighted-btn'> Get Resume </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className=' profile-picture-background'></div>
                </div>

            </div>

        </div>
    )
}
