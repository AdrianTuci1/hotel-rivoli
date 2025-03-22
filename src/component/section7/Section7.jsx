import React, { useEffect, useRef, useState } from 'react'
import './section7.scss'
import NavCard from '../navCard/NavCard'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section7() {
    const { t } = useTranslation();
    const contentRef = useRef(null);
    const cardRefs = useRef([]);
    const [centeredCardIndex, setCenteredCardIndex] = useState(null);

    // Setup animation for content
    useEffect(() => {
        const content = contentRef.current;
        
        gsap.fromTo(content, 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    // Setup IntersectionObserver for cards
    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, images.length);
        
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '-30% 0px -30% 0px', // Focus on the center 40% of the viewport
            threshold: 0.6, // Card is at least 60% visible
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = cardRefs.current.findIndex(ref => ref === entry.target);
                if (index === -1) return;
                
                if (entry.isIntersecting) {
                    setCenteredCardIndex(index);
                } else if (centeredCardIndex === index) {
                    setCenteredCardIndex(null);
                }
            });
        }, options);
        
        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });
        
        return () => {
            cardRefs.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, [centeredCardIndex]);

    const images = [
        { src: './metrou.JPG', description: 'METROU 1 DECEMBRIE 1918 - 700M', link:`${import.meta.env.VITE_MAP_METROU}` },
        { src: './parklake.png', description: 'CENTRUL COMERCIAL PARK LAKE - 3000M', link:`${import.meta.env.VITE_MAP_PARK}`},
        { src: './parcultitan.jpg', description: "PARCUL TITAN - 2000M", link:`${import.meta.env.VITE_MAP_TITAN}`}
    ];

    return (
        <div className="sec7">
            <div className='continut7'>
                <div className="bxz1"></div>
                <span className="continut3" ref={contentRef}>
                    {t('section7')}
                </span>
            </div>
            <div className="image-card-containerr">
                {images.map((image, index) => (
                    <div ref={el => cardRefs.current[index] = el} key={image.src} className="card-wrapper">
                        <NavCard 
                            imageSrc={image.src} 
                            description={image.description}
                            link={image.link}
                            isCentered={centeredCardIndex === index}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section7