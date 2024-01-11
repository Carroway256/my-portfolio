import React, { useEffect, useState, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from '../components/navBar';
import useOnScreen from '../hooks/IsInView';
import '../styles/index.css';
import { navigate } from 'gatsby';
const IndexPage = () => {
  const [isCoppied, setIsCoppied] = useState(false);
  const [tab, setTab] = useState('');

  const aboutRef = useRef(3);
  const experienceRef = useRef(2);
  const portfolioRef = useRef(1);

  const isAboutVisible = useOnScreen(aboutRef);
  const isExperienceVisible = useOnScreen(experienceRef);
  const isPortfolioVisible = useOnScreen(portfolioRef);

  useEffect(() => {
    let btn = document.querySelector('.mouse-cursor-gradient-tracking');
    btn.addEventListener('mousemove', (e) => {
      let x = e.clientX;
      let y = e.pageY;
      btn.style.setProperty('--y', y + 'px');
      if (x > document.body.clientWidth - 100) {
      } else {
        btn.style.setProperty('--x', x + 'px');
      }
    });
  }, []);
  useEffect(() => {
    isAboutVisible && setTab('about');
  }, [isAboutVisible]);
  useEffect(() => {
    isExperienceVisible && setTab('experience');
  }, [isExperienceVisible]);
  useEffect(() => {
    isPortfolioVisible && setTab('portfolio');
  }, [isPortfolioVisible]);
  useEffect(() => {
    console.log(tab);
    if (tab === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'experience') experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'portfolio') portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [tab]);

  return (
    <div>
      <div className=" mouse-cursor-gradient-tracking cursor-default  font-sans">
        <div className=" relative mx-16 flex items-center  gap-32  ">
          <div className="sticky top-[0] flex h-[100vh] flex-col justify-between gap-8 self-start py-20 2xl:py-60 ">
            <div className="self-center">
              <StaticImage
                src="../../static/R2.png"
                alt="A dinosaur"
                className="max-w-[100px]   "
              />{' '}
            </div>
            <div className="font-bold">
              {' '}
              <div>Ryszard Solecki</div>
              <div>Fullstack Developer</div>
            </div>

            <NavBar tab={tab} setTab={setTab} />
            <div className="flex gap-4">
              <svg
                class="h-6 w-6 text-white opacity-50 hover:opacity-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
              <svg
                class="h-6 w-6 text-white opacity-50 hover:opacity-100"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div
                className="opacity-50 hover:opacity-100"
                onClick={() => {
                  navigator.clipboard.writeText('harrtuck@gmail.com');
                  setIsCoppied(true),
                    setInterval(() => {
                      setIsCoppied(false);
                    }, 2000);
                }}
              >
                harrtuck@gmail.com
              </div>{' '}
              <div
                className={`mt-2 translate-x-[-300px] text-[15px] ${
                  isCoppied ? 'coppied_message' : ''
                }`}
              >
                COPPIED TO CLIPBOARD
              </div>
            </div>
          </div>

          <div className=" ml-auto flex flex-col py-40 text-[20px]">
            <div ref={aboutRef} className="h-[100vh]">
              {' '}
              I started my programming journey with CS50 course from harvard and self learning.
              After one year i got my first job and I have been working or freelancing ever since
              which is a bit above 2 years. I will also finish my bachelors degree in computer
              science in this year
            </div>{' '}
            <div ref={experienceRef} className="h-[100vh]">
              {' '}
              xd
            </div>{' '}
            <div ref={portfolioRef} className="h-[100vh]">
              {' '}
              wp
            </div>{' '}
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default IndexPage;
