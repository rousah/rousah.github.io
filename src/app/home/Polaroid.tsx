'use client';

import React from 'react';
import AnimatedImage from '@/app/home/AnimatedImage';
import { StaticImageData } from 'next/image';
import { Color } from '../types/colors';
import Link from 'next/link';

type Props = {
  title: string;
  image: StaticImageData;
  color: Color;
  href: string;
};

export default function Polaroid(props: Props) {
  const borderClassNames = `border-${props.color} border-solid`;
  return (
    <Link href={props.href} className="flex flex-col">
      <div
        className={`${borderClassNames} border-24 grow flex items-center`}
      >
        <AnimatedImage src={props.image} />
      </div>
      <div
        className={`${borderClassNames} border-b-24 bg-${props.color} px-[24px] text-right text-2xl md:text-4xl`}
      >
        {props.title}
      </div>
    </Link>
  );
}
