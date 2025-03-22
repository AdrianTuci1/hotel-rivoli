import './section1.scss';
import { BedDouble, MessageCircleMore } from 'lucide-react';
import BoxRow from '../risingText/RisingText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Carousel from '../carousel/Carousel';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

function Section1() {
  const { t } = useTranslation();
  const text1 = "HOTEL";
  const text2 = "RIVOLI";
  const logoRef = useRef(null);
  const logoContainerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.item', {
      delay: 0.4,
      opacity: 0,
      duration: 2,
      ease: 'back.in',
      stagger: 0.2,
    });

    // Create logo particles effect
    if (logoRef.current && logoContainerRef.current) {
      // Hide original logo completely
      gsap.set(logoRef.current, { 
        opacity: 0, 
        visibility: 'hidden',
        display: 'none' 
      });
      
      // Load the image separately to ensure dimensions are correct
      const logoImg = new Image();
      logoImg.src = "./hrlogo.png";
      
      logoImg.onload = () => {
        // Create particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'logo-particles-container';
        logoContainerRef.current.appendChild(particlesContainer);
        
        // Use natural dimensions of the image
        const logoWidth = 50; // Fixed size based on CSS
        const logoHeight = 50; // Fixed size based on CSS
        
        // Create particles
        const numParticles = 100;
        const gridSize = 10; // 10x10 grid
        const particles = [];
        
        for (let i = 0; i < numParticles; i++) {
          const particle = document.createElement('div');
          particle.className = 'logo-particle';
          
          // Calculate position in grid
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          
          // Set dimensions
          const particleWidth = logoWidth / gridSize;
          const particleHeight = logoHeight / gridSize;
          
          // Style
          particle.style.backgroundImage = `url(./hrlogo.png)`;
          particle.style.width = `${particleWidth}px`;
          particle.style.height = `${particleHeight}px`;
          particle.style.position = 'absolute';
          particle.style.backgroundSize = `${logoWidth}px ${logoHeight}px`;
          
          // Calculate background position to show different parts of the image
          const bgPosX = col * particleWidth;
          const bgPosY = row * particleHeight;
          particle.style.backgroundPosition = `-${bgPosX}px -${bgPosY}px`;
          
          // Set final position of each particle
          particle.style.left = `${col * particleWidth}px`;
          particle.style.top = `${row * particleHeight}px`;
          
          particlesContainer.appendChild(particle);
          particles.push(particle);
          
          // Set initial positions - start from bottom-left corner and go outward
          // Diagonal distance from bottom-left (0,gridSize) to current position
          const distanceFromOrigin = Math.sqrt(
            Math.pow(col, 2) + 
            Math.pow(gridSize - row, 2)
          );
          
          const maxDistance = Math.sqrt(
            Math.pow(gridSize, 2) + 
            Math.pow(gridSize, 2)
          );
          
          const normalizedDistance = distanceFromOrigin / maxDistance;
          
          // Start position - further bottom-left for particles that are further top-right
          const startDistance = 150 + normalizedDistance * 200;
          const angle = Math.PI / 4 + (Math.random() * 0.3); // Angle from bottom-left
          
          gsap.set(particle, {
            x: -startDistance * Math.cos(angle),
            y: startDistance * Math.sin(angle),
            opacity: 0,
            scale: 0,
            rotation: Math.random() * 360,
          });
        }
        
        // Animate particles to their original positions
        gsap.to(particles, {
          duration: 2,
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          ease: "power3.out",
          stagger: {
            from: "start", 
            amount: 1.5,
            grid: [gridSize, gridSize],
            axis: "xy", // This creates the bottom-left to top-right effect
            ease: "power1.in"
          },
          onComplete: () => {
            // Remove the particles container
            particlesContainer.remove();
            
            // Show the original logo
            gsap.set(logoRef.current, { 
              visibility: 'visible',
              display: 'block',
              opacity: 0 // Start invisible
            });
            
            // Fade in the logo
            gsap.to(logoRef.current, {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });
      };
    }
  }, []);

  return (
    <section className="maini" id="inceput" aria-label="Hotel Rivoli - Pagina de start">
      {/* Carousel Background */}
      <div className="carus" aria-hidden="true">
        <Carousel />
      </div>
      
      {/* Centered Content */}
      <div className="wrapper">
        <span className="logo" ref={logoContainerRef}>
          <img src="./hrlogo.png" alt="Logo Hotel Rivoli București" ref={logoRef} />
        </span>
        
        <header>
          <h1 className="title">
            <BoxRow text={text1} />
          </h1>
          
          <h2 className="title second">
            <BoxRow text={text2} />
          </h2>
        </header>
        
        <p className="text">
          {t("bun venit")}
        </p>
        
        <div className="contactpg">
          <a href={import.meta.env.VITE_BOOK_URL} target="_blank" className="book item" rel="noopener" aria-label="Rezervă o cameră acum">
            BOOK &nbsp;<BedDouble size={16} aria-hidden="true" />
          </a>
          <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" className="whatsapp item" rel="noopener" aria-label="Contactează-ne pe WhatsApp">
            WHATSAPP &nbsp;<MessageCircleMore width={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section1;
