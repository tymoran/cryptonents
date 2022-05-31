/// <reference types="react" />
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
    tags: {
        label: string;
        color: string;
    }[];
    /**
     * Project metrics.
     */
    metrics: {
        key: string;
        value: string;
    }[];
    /**
     * Optional click handler.
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const ProjectCard: ({ title, content, tags, metrics, ...props }: ProjectCardProps) => JSX.Element;
export {};
