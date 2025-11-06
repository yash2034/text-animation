"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import AnimatedCopy from "@/components/AnimatedCopy";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef();
  const heroImgRef = useRef();
  const heroSectionRef = useRef();
  const heroLeftRef = useRef();
  const heroRightRef = useRef();
  const bannerImgRef = useRef();
  const aboutSectionRef = useRef();
  const aboutHeaderRef = useRef();
  const serviceImgRefs = useRef([]);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    // Opening split/merge animation
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    
    // Set initial state - image parts are split
    gsap.set([heroLeftRef.current, heroRightRef.current], {
      opacity: 1,
    });
    
    gsap.set(heroLeftRef.current, {
      xPercent: -50,
      scale: 1.2,
    });
    
    gsap.set(heroRightRef.current, {
      xPercent: 50,
      scale: 1.2,
    });

    // Animate the merge
    tl.to([heroLeftRef.current, heroRightRef.current], {
      xPercent: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    })
    // Fade in about section
    .from(aboutSectionRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    }, "-=0.5")
    // Header text animation
    .from(aboutHeaderRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6");

    // Hero image parallax effect
    gsap.to(heroImgRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Banner image - scale and clip-path reveal
    gsap.from(bannerImgRef.current, {
      scale: 1.3,
      clipPath: "inset(20% 20% 20% 20%)",
      scrollTrigger: {
        trigger: bannerImgRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    });

    // Service images animations
    serviceImgRefs.current.forEach((img, index) => {
      if (!img) return;

      // Initial reveal animation
      gsap.from(img, {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effect
      gsap.to(img, {
        yPercent: index % 2 === 0 ? 15 : -15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Subtle rotation
      gsap.to(img, {
        rotation: index % 2 === 0 ? 1.5 : -1.5,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRef: false }} ref={lenisRef} />

      <section ref={heroSectionRef} className="hero">
        <div className="hero-container" ref={heroImgRef}>
          <div className="hero-split hero-left" ref={heroLeftRef}>
            <img src="/images/img_6.jpeg" alt="image 1" />
          </div>
          <div className="hero-split hero-right" ref={heroRightRef}>
            <img src="/images/img_6.jpeg" alt="image 1" />
          </div>
        </div>
      </section>

      <section ref={aboutSectionRef} className="about">
        <div className="header" ref={aboutHeaderRef}>
          <h1>A New Era of Abstract Arts</h1>
        </div>
        <div className="copy">
          <AnimatedCopy>
            <p>
              Color spills where logic ends. Shapes drift without asking for
              names. A line hesitates, bends, breaks, reforms. Space becomes
              suggestion, not boundary. The canvas is only a surface until the
              viewer breathes into it — and suddenly it remembers to mean
              something. Or nothing. Both are allowed here. The abstract lives in
              between.
            </p>
          </AnimatedCopy>
        </div>
      </section>

      <section className="banner-img">
        <img 
          ref={bannerImgRef}
          src="/images/img_3.jpeg" 
          alt="image 3" 
        />
      </section>

      <section className="services">
        <div className="service">
          <div className="col">
            <div className="service-copy">
              <h3>Art That Speaks Without Words</h3>
              <AnimatedCopy>
                <p>
                  We create abstract art that moves beyond visuals and into
                  emotion. Each piece is a conversation between color, shape, and
                  rhythm — designed to evoke feeling rather than explain it.
                  Whether you're looking for something bold and expressive or calm
                  and meditative, our work invites viewers to pause and interpret
                  the moment in their own way.
                </p>
              </AnimatedCopy>
            </div>
          </div>
          <div className="col">
            <img 
              ref={(el) => (serviceImgRefs.current[0] = el)}
              src="/images/img_4.jpeg" 
              alt="image 4" 
            />
          </div>
        </div>
        <div className="service">
          <div className="col">
            <img 
              ref={(el) => (serviceImgRefs.current[1] = el)}
              src="/images/img_12.jpeg" 
              alt="image 6" 
            />
          </div>
          <div className="col">
            <div className="service-copy">
              <h3>Crafted Expression, Unique to You</h3>
              <AnimatedCopy>
                <p>
                  Our process is rooted in experimentation. We explore materials,
                  textures, and organic flows to create compositions that are
                  never repeated. Every artwork is handcrafted, ensuring that what
                  you receive isn't just a piece of decor, but a one-of-a-kind
                  visual story. The result is something living — art that
                  continues to shift as the viewer engages with it.
                </p>
              </AnimatedCopy>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="col">
            <div className="service-copy">
              <h3>Designing Emotion Through Color</h3>
              <AnimatedCopy>
                <p>
                  We collaborate closely with clients to understand mood, environment, and aesthetic direction. From large-format canvas installations to digital prints tailored for specific interior palettes, we design art that enhances spaces while preserving artistic authenticity. The goal isn't just to fill a wall, but to create a focal point that shapes the atmosphere of the room.
                </p>
              </AnimatedCopy>
            </div>
          </div>
          <div className="col">
            <img 
              ref={(el) => (serviceImgRefs.current[2] = el)}
              src="/images/img_7.jpeg" 
              alt="image 7" 
            />
          </div>
        </div>
        <div className="service">
          <div className="col">
            <img 
              ref={(el) => (serviceImgRefs.current[3] = el)}
              src="/images/img_10.jpeg" 
              alt="image 6" 
            />
          </div>
          <div className="col">
            <div className="service-copy">
              <h3>Where Space Meets Imagination</h3>
              <AnimatedCopy>
                <p>
                  Whether it's for homes, offices, galleries, or curated brand environments, our abstract art brings identity and character into any space. We believe art should feel personal — something that resonates, inspires, or simply calms. If you're looking to bring depth, color, and emotion into your surroundings, we're here to create something meaningful for you.
                </p>
              </AnimatedCopy>
            </div>
          </div>
        </div>
      </section>

      <section className="outro">
        <h3>Innovation keeps on happening in the art world.</h3>
      </section>
    </>
  );
}