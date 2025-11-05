"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis";

export default function Home() {
  const lenisRef = useRef();
  return (
    <>
      <ReactLenis root options={{ autoRef: false }} ref={lenisRef} />

      <section className="hero">
        <img src="/images/img_1.jpeg" alt="image 1" />
      </section>

      <section className="about">
        {/* <img src="/images/img_2.jpeg" alt="image 2" /> */}
        <div className="header">
          <h1>A New Era of Abstract Arts</h1>
        </div>
        <div className="copy">
          <p>
            Color spills where logic ends. Shapes drift without asking for
            names. A line hesitates, bends, breaks, reforms. Space becomes
            suggestion, not boundary. The canvas is only a surface until the
            viewer breathes into it — and suddenly it remembers to mean
            something. Or nothing. Both are allowed here. The abstract lives in
            between.
          </p>
        </div>
      </section>

      <section className="banner-img">
        <img src="/images/img_3.jpeg" alt="image 3" />
      </section>

      <section className="services">
        <div className="service">
          <div className="col">
            <div className="service-copy">
              <h3>Art That Speaks Without Words</h3>
              <p>
                We create abstract art that moves beyond visuals and into
                emotion. Each piece is a conversation between color, shape, and
                rhythm — designed to evoke feeling rather than explain it.
                Whether you’re looking for something bold and expressive or calm
                and meditative, our work invites viewers to pause and interpret
                the moment in their own way.
              </p>
            </div>
          </div>
          <div className="col">
            <img src="/images/img_4.jpeg" alt="image 4" />
          </div>
        </div>
        <div className="service">
          <div className="col">
            <img src="/images/img_6.jpeg" alt="image 6" />
          </div>
          <div className="col">
            <div className="service-copy">
              <h3>Crafted Expression, Unique to You</h3>
              <p>
                Our process is rooted in experimentation. We explore materials,
                textures, and organic flows to create compositions that are
                never repeated. Every artwork is handcrafted, ensuring that what
                you receive isn’t just a piece of decor, but a one-of-a-kind
                visual story. The result is something living — art that
                continues to shift as the viewer engages with it.
              </p>
            </div>
          </div>
        </div>
        <div className="service">
        <div className="col">
            <div className="service-copy">
              <h3>Designing Emotion Through Color</h3>
              <p>
                We collaborate closely with clients to understand mood, environment, and aesthetic direction. From large-format canvas installations to digital prints tailored for specific interior palettes, we design art that enhances spaces while preserving artistic authenticity. The goal isn't just to fill a wall, but to create a focal point that shapes the atmosphere of the room.
              </p>
            </div>
          </div>
          <div className="col">
            <img src="/images/img_7.jpeg" alt="image 7" />
          </div>
        </div>
        <div className="service">
        <div className="col">
            <img src="/images/img_6.jpeg" alt="image 6" />
          </div>
          <div className="col">
            <div className="service-copy">
              <h3>Where Space Meets Imagination</h3>
              <p>
                Whether it's for homes, offices, galleries, or curated brand environments, our abstract art brings identity and character into any space. We believe art should feel personal — something that resonates, inspires, or simply calms. If you're looking to bring depth, color, and emotion into your surroundings, we’re here to create something meaningful for you.
              </p>
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
