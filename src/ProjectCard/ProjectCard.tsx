import React from 'react';
import { Button } from '../Button/Button';
import { Pill } from '../Pill/Pill';
import './projectCard.css';

interface ProjectCardProps {
  /**
   * ProjectCard title.
   */
  title: string;
  /**
   * ProjectCard content.
   */
   content: string;
  /**
   * Project tags.
   */
   tags: {label: string, color: string}[];
  /**
   * Project metrics.
   */
   metrics: {key: string, value: string}[];
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({
  title,
  content,
  tags = [],
  metrics = [],
  ...props
}: ProjectCardProps) => {
  const color = 'blue';

  const tones = [500, 700];
  const text = color + '-' + tones[1];

  return (
    <div className="w-64 m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90">
        <a href="#" className="block w-full h-full">
            <img alt="blog photo" src="https://placehold.jp/3d4070/ffffff/150x150.png" className="object-cover w-full max-h-40"/>
            <div className="w-full p-4 bg-white dark:bg-gray-800">
                <div className="mb-2">{tags.map(tag => {
                  return <span className="mr-2"><Pill active label={tag.label} customColor={tag.color}/></span>
                })}</div>
                <p className="mb-2 font-medium text-gray-800 dark:text-white text-md">
                    {title}
                </p>
                <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">
                    {content}
                </p>
                <div className="p-2 my-4 text-sm rounded-lg bg-slate-100">{metrics.map((metric, index) => {
                  return <div className={`flex justify-between ${index ? 'border-t border-slate-200 mt-1 pt-1' : ''}`}>
                    <div className="text-gray-500">{metric.key}</div>
                    <div className="text-gray-700">{metric.value}</div>
                  </div>;
                })}</div>
                <div className="mt-2"><Button label="View project" primary fullWidth /></div>
            </div>
        </a>
    </div>
  );
};

