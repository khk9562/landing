import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import "./App.css";

const Section = ({ children, background }) => {
  return (
    <div className="section" style={{ backgroundImage: `url(${background})` }}>
      {children}
    </div>
  );
};

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const container = appRef.current;
      const containerHeight = container.clientHeight;
      const scrollAmount = e.deltaY > 0 ? containerHeight : -containerHeight;
      const targetScroll = container.scrollTop + scrollAmount;

      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    };

    const appElement = appRef.current;
    appElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      appElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="App" ref={appRef}>
      {/* First section remains unchanged */}
      <Section background="https://images.unsplash.com/photo-1477894387642-00a731c511b3">
        <div>
          <img
            height={220}
            src="/logo-removebg.png"
            style={{ margin: "0 auto" }}
          ></img>
          <div className="youtube-container">
            <iframe
              style={{
                width: "100%",
                height: "400px",
              }}
              src="https://www.youtube.com/embed/K3eToG62fRM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* <p>Discover a world of excitement and serenity at Sunway Adventure</p> */}
        </div>
      </Section>

      <Section background="https://plus.unsplash.com/premium_photo-1661379066665-9510f616f349?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div>
          <h2>Splash into Excitement at Sunway Waterpark</h2>
          <p>
            Immerse yourself in the beauty of nature without sacrificing
            comfort. Our luxury glamping sites offer a perfect blend of outdoor
            adventure and modern amenities under the starry sky.
          </p>
          <div
            className={`list max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none`}
          >
            <FadeInWhenVisible>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the first item */}
                dfsdfds
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the second item */}
                dfsdfdsf
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the third item */}
                dfsfds
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </Section>

      {/* Third section remains unchanged */}
      <Section background="https://images.unsplash.com/photo-1520095972714-909e91b038e5">
        {/* ... (previous content) */}
        <div>
          <h2>Unwind in Nature: Sunway Glamping Experience</h2>
          <p>
            Immerse yourself in the beauty of nature without sacrificing
            comfort. Our luxury glamping sites offer a perfect blend of outdoor
            adventure and modern amenities under the starry sky.
          </p>
          <div
            className={`list max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none`}
          >
            <FadeInWhenVisible>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the first item */}
                dfsdfds
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the second item */}
                dfsdfdsf
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                {/* Content of the third item */}
                dfsfds
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
