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
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-64 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
            <img alt="blog photo" src="https://placehold.jp/3d4070/ffffff/150x150.png" className="max-h-40 w-full object-cover"/>
            <div className="bg-white dark:bg-gray-800 w-full p-4">
                <div className="mb-2">{tags.map(tag => {
                  return <span className="mr-2"><Pill active label={tag.label} customColor={tag.color}/></span>
                })}</div>
                <p className="text-gray-800 dark:text-white text-md font-medium mb-2">
                    {title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs leading-5">
                    {content}
                </p>
                <div className="my-4 text-xs p-2 bg-slate-100 rounded-lg">{metrics.map((metric, index) => {
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

