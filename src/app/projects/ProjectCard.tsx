import React from 'react';
import Image from 'next/image';
import { type Project } from '@/app/projects/projects';
import TextLoop from '@/app/components/text/TextLoop';

type Props = {
  project: Project;
  borderClassName: string;
};

export default function ProjectCard(props: Props) {
  const project = props.project;
  const borderClassNames = props.borderClassName;

  return (
    <div className="flex flex-col text-black font-radley">
      <div className={`${borderClassNames} border-b-0`}>
        <div className={`grow flex items-center`}>
          <Image
            src={project.image}
            alt="placeholder"
            style={{ width: '100%', height: 'auto' }}
            priority={true}
            className="aspect-4/3 object-contain"
          />
        </div>
        <div className="bg-pink overflow-hidden whitespace-nowrap">
          <TextLoop text={project.type}></TextLoop>
        </div>
      </div>
      <div className={`${borderClassNames} bg-white py-3 text-center text-4xl`}>
        {project.title}
      </div>
    </div>
  );
}
