import React from 'react';
import './index.wrapper.css';
type ComponentPropsType = {
    label?: string | JSX.Element;
    placeholder?: string;
    defaultValue?: number;
    onChange: Function;
    options: Array<{
        [key: string]: any;
    }>;
};
export default function SelectList({ label, placeholder, defaultValue, options, onChange }: ComponentPropsType): React.JSX.Element;
export {};
