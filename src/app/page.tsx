import Sections from '@/app/home/Sections';
import Image from 'next/image';
import PageLayout from '@/app/components/page/PageLayout';
import grain from '@/app/assets/home/grain.webp';
import FloatingClouds from '@/app/home/FloatingClouds';
import { CSSProperties } from 'react';

export default function Home() {
  // TODO: Add shadow to welcome text
  const shadowTexture = {
    boxShadow:
      'inset 0px 0px 56px 0px #9681B8, inset 50px -90px 90px 0px #FAF796, inset 26px 19px 100px 36px #75ABDB',
    background:
      'linear-gradient(to bottom right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, #9681B8 0%, #FAF796 25%, #75ABDB 50%) top right / 50% 50% no-repeat',
    overflow: 'hidden',
  };

  const style = {
    height: '95vh',
  };

  const textStyle: CSSProperties = {
    display: 'inline-block',
    background: 'linear-gradient(to bottom, #F3FDFF, #FAF796)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <PageLayout color="green">
      <FloatingClouds></FloatingClouds>
      <div className="pb-8 md:pb-14 relative" style={style}>
        <Image
          src={grain}
          alt="grain"
          style={{ width: '100%', height: '100%' }}
          className="absolute pb-8 md:pb-14 top-0 opacity-35"
          priority={true}
        />
        <div
          style={shadowTexture}
          className="w-full h-full text-center pt-8 text-4xl lg:text-5xl"
        >
          <span style={textStyle} className="z-10 relative">
            Welcome!
          </span>
        </div>
      </div>
      <div className="min-h-dvh pb-5">
        <div className="md:pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 mb-24 gap-y-8 lg:gap-y-0">
          <Sections></Sections>
        </div>
      </div>
    </PageLayout>
  );
}
