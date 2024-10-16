'use client';

import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';
import { Colors } from '@/app/types/colors';

const twFullConfig = resolveConfig(tailwindConfig);

// TODO: change CV link

export default function DownloadCVButton() {
  const downloadCVText = 'Download CV!!!';
  const whiteShadow = `0px -5px 0px ${twFullConfig.theme.colors[Colors.white]}`;
  const pinkShadow = `0px -10px 0px ${twFullConfig.theme.colors[Colors.pink]}`;

  const doubleShadow = `${whiteShadow}, ${pinkShadow}`;
  const textShadow = {
    textShadow: doubleShadow,
  };

  return (
    <button
      onClick={() => window.open('cv/rosa_van_der_heide.pdf')}
      className="bg-yellow text-3xl text-black pt-5 pb-3 px-7"
    >
      <span style={textShadow}>{downloadCVText}</span>
    </button>
  );
}
