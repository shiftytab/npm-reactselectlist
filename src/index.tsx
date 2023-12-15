import React from 'react';
import { useEffect, useRef, useState } from 'react';
import './index.wrapper.css';

type ComponentPropsType = {
    label?: string|JSX.Element,
    placeholder?: string,
    defaultValue?: number,
    onChange: Function,
    options: Array<{ [key: string]: any }>,
}

export default function SelectList({ label, placeholder, defaultValue, options, onChange } : ComponentPropsType) {

    const [selected, setSelected] = useState<{[key: string] : string} | null>(null)
    const [show, setShow] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement|null>(null);

    const handleUpdateOption = (option : {[key: string] : string}) => {
        onChange(option);
        setSelected(option);
        setShow(false);
    }

    const handleTriggerDropdownSelect = () => {
        setShow(!show)
    }

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
            setShow(false);
        }
    }

    useEffect(() => {

        if(show) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show]);

    useEffect(() => {
        if(defaultValue || defaultValue === 0) {
            setSelected(options[defaultValue] ?? null);
        }
    }, [defaultValue])

    return options && (
        <div className="container-select">
            {
                (label) && (
                    (typeof label === 'string') ? (
                        <label>{label}</label>
                    ) : label
                )
            }
            <div className='input-select' onClick={() => handleTriggerDropdownSelect()}>
                <div className='input-field'>
                    {
                        selected ? selected.value : (
                            <span className='placeholder'>{placeholder ?? ""}</span>
                        )
                    }
                </div>
                <div className='input-icon'>
                    {
                        (show) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        )
                    }
                </div>
            </div>
            {
                (show) && (
                    <div className="dropdown-select" ref={dropdownRef} style={{top: (label ? 80 : 50)}}>
                        {
                            (options.length > 0) && options.map((option, index) => {
                                return (
                                    <div key={index} className="dropdown-item" onClick={() => handleUpdateOption(option)}>
                                        {option.value}
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
           
        </div>
    )
}
