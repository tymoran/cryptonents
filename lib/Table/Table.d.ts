/// <reference types="react" />
import './table.css';
interface TableProps {
    /**
     * Table title.
     */
    title: string;
    /**
     * Table content.
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
export declare const Table: ({ title, content, tags, metrics, ...props }: TableProps) => JSX.Element;
export {};
