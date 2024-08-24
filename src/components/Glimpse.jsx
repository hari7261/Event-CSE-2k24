/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import python1 from '../assets/carousels/python1.png';
import gitprofile from '../assets/carousels/gitprofile1.png';
import gitprofile2 from '../assets/carousels/gitprofile2.png';

function Glimpse() {
    const row1 = [
        python1,
        gitprofile,
        gitprofile2,
    ];

    return (
        <section id="glimpse">
            <AppContainer>
                <Wrapper>
                    <TitleWrapper>
                        <h2 className="font-medium text-xl tracking-wider mb-6 text-black dark:text-white inline-block uppercase border-b-2 border-b-slate-700 pb-1">
                            A Glimpse of
                        </h2>
                        <h3 className="text-3xl sm:text-6xl text-black dark:text-white uppercase tracking-wider px-16 leading-10 sm:px-0 mb-16 font-semibold">
                            V-PRAYUKTI’2
                        </h3>
                    </TitleWrapper>
                    <Marquee>
                        {row1.map((el, index) => (
                            <MarqueeGroup key={index}>
                                <ImageGroup>
                                    <Image src={el} alt={`glimpse-${index}`} />
                                </ImageGroup>
                            </MarqueeGroup>
                        ))}
                        {row1.map((el, index) => (
                            <MarqueeGroup key={index + row1.length}>
                                <ImageGroup>
                                    <Image src={el} alt={`glimpse-${index + row1.length}`} />
                                </ImageGroup>
                            </MarqueeGroup>
                        ))}
                    </Marquee>
                </Wrapper>
            </AppContainer>
        </section>
    );
}

export default Glimpse;

const AppContainer = styled.div`
  width: 100%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 1.25rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h3 {
    font-size: 2.5rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: auto;
  animation: ${scrollX} 10s linear infinite;

  @media (max-width: 768px) {
    animation-duration: 20s;
  }

  @media (max-width: 480px) {
    animation-duration: 25s;
  }
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(5rem, 15rem + 30vmin, 18rem);
  padding: calc(clamp(8rem, 1rem + 25vmin, 25rem) / 10);

  @media (max-width: 768px) {
    width: clamp(4rem, 12rem + 20vmin, 15rem);
  }

  @media (max-width: 480px) {
    width: clamp(3rem, 10rem + 15vmin, 12rem);
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: white;
  aspect-ratio: 16/9;
  padding: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
