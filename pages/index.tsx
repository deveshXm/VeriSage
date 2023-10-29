// import { Grid, Button } from "@geist-ui/core";
// import { ArrowRightCircle } from "@geist-ui/icons";
import { useContext, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { GlobalAppContext } from "@/contexts/GlobalAppContext";
import { connectToMetamask } from "@/services/metamaskServices";
import hero from "../public/hero.png";

export default function Hero() {
  // const navigate = useNavigate();
  const { metamaskAccountAddress, setMetamaskAccountAddress } =
    useContext(GlobalAppContext);

  const retrieveWalletAddress = async () => {
    const addresses = await connectToMetamask();
    if (addresses) {
      // grab the first wallet address
      setMetamaskAccountAddress(addresses[0]);
      // console.log("This is amazing", addresses[0]);
    }
  };

  useEffect(() => {
    console.log("metamaskAccountAddress has changed:", metamaskAccountAddress);
    // You can perform actions here when metamaskAccountAddress changes.
  }, [metamaskAccountAddress]);

  const titleRef = useRef<HTMLHeadingElement>(null);
  return (
    <section
      className="relative h-screen"
      style={{
        background:
          // "url(https://github.com/tailwind/kite/assets/48355572/4bfa0c89-00a2-4322-9cf9-8fd911850aa0)",
          `url(${hero.src})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        {/* <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="250" r="128" />
            <circle cx="135" cy="443" r="64" />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-8xl p-4 md:text-9xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
              ref={titleRef}
            >
              <div className="bg-clip-text text-transparent">
                <span
                  className="span-anim py-1"
                  style={{
                    color: "white",
                    fontFamily: "'Gloock', serif", // Added font-family property
                  }}
                >
                  <center>
                    <mark>VeriSage</mark>
                  </center>
                </span>

                <div style={{ display: "flex" }}>
                  <span
                    className="span-anim"
                    data-content="Back"
                    style={
                      {
                        "--start-color": "red",
                        "--end-color": "orange",
                        "--delay": 0,
                        color: "white",
                        marginRight: "30px",
                      } as React.CSSProperties
                    }
                  >
                    Secure
                  </span>

                  <span
                    className="span-anim"
                    data-content="Best"
                    style={
                      {
                        "--start-color": "blue",
                        "--end-color": "cyan",
                        "--delay": 2,
                        color: "white",
                        marginRight: "30px",
                      } as React.CSSProperties
                    }
                  >
                    &
                  </span>

                  <span
                    className="span-anim"
                    data-content="Projects"
                    style={
                      {
                        "--start-color": "green",
                        "--end-color": "lime",
                        "--delay": 4,
                        color: "white",
                        marginRight: "30px",
                      } as React.CSSProperties
                    }
                  >
                    Verified
                  </span>
                </div>
              </div>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p
                className="text-2xl text-gray-300 mb-12"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Verisage: Navigating the Digital Frontier with Precision,
                Insight, and Confidence{" "}
              </p>
              <div className=" flex flex-wrap space-x-4 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div>
                  <Link href="/dashboard">
                    <Button variant="secondary" className=" px-8 text-lg">
                      Dashboard
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link href="/upload">
                    <Button variant="secondary" className=" px-8 text-lg">
                      Upload
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
      </div>
    </section>
  );
}
