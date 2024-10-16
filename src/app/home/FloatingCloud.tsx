'use client';

import Image from 'next/image';
import cloud from '@/app/assets/cloud1.webp';

export default function FloatingClouds() {
  const cloudStyle1 = {
    position: 'absolute',
    top: '15%',
    marginLeft: '105%',
    width: '300px',
    height: 'auto',
    animation: 'moveClouds 70s linear infinite',
    animationDelay: '4s',
    opacity: 1,
  };

  const cloudStyle2 = {
    position: 'absolute',
    top: '30%',
    marginLeft: '-105%',
    width: '250px',
    height: 'auto',
    animation: 'moveCloudsOpposite 68s linear infinite',
    animationDelay: '200ms',
    opacity: 0.89,
  };

  const cloudStyle4 = {
    position: 'absolute',
    marginLeft: '105%',
    top: '55%',
    width: '234px',
    height: 'auto',
    animation: 'moveClouds 80s linear infinite',
    animationDelay: '9s',
    opacity: 0.85,
  };

  const cloudStyle3 = {
    position: 'absolute',
    marginLeft: '105%',
    top: '80%',
    width: '200px',
    height: 'auto',
    animation: 'moveClouds 89s linear infinite',
    opacity: 0.8,
  };

  return (
    <>
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle1}
        className="floating-cloud"
        priority={false}
      />
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle2}
        className="floating-cloud"
        priority={false}
      />
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle3}
        className="floating-cloud"
        priority={false}
      />
      <Image
        src={cloud}
        alt="cloud"
        style={cloudStyle4}
        className="floating-cloud"
        priority={false}
      />
      <style jsx>{`
        @keyframes moveClouds {
          0% {
            margin-left: 100%;
          }
          100% {
            margin-left: -30%;
          }
        }
        @keyframes moveCloudsOpposite {
          0% {
            margin-left: -30%;
          }
          100% {
            margin-left: 100%;
          }
        }
      `}</style>
    </>
  );
}
