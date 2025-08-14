import "./CSS/Loading.css"
import {useState, useEffect} from "react";

const Loading = ({
                             size = 'medium',
                             className = '',
                             lightCount = 5,
                             animationSpeed = 800,
                             glowEffect = true
                         }) => {
    const [activeLight, setActiveLight] = useState(-1);
    const [phase, setPhase] = useState('lighting');

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLight(prev => {
                if (phase === 'lighting') {
                    if (prev < lightCount - 1) {
                        return prev + 1;
                    } else {
                        setTimeout(() => setPhase('extinguish'), 500);
                        return prev;
                    }
                }
                return prev;
            });
        }, animationSpeed);

        return () => clearInterval(interval);
    }, [lightCount, animationSpeed, phase]);

    useEffect(() => {
        if (phase === 'extinguish') {
            const timeout = setTimeout(() => {
                setActiveLight(-1);
                setPhase('lighting');
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [phase]);

    const getLightClass = (index) => {
        let classes = `f1-light f1-light--${size}`;

        if (phase === 'lighting' && index <= activeLight) {
            classes += ` f1-light--active${glowEffect ? ' f1-light--glow' : ''}`;
        } else if (phase === 'pause') {
            classes += ` f1-light--active${glowEffect ? ' f1-light--glow' : ''}`;
        } else {
            classes += ' f1-light--inactive';
        }

        return classes;
    };

    return (
        <div className={`f1-lights-container ${className}`}>
            <div className={`f1-lights-panel f1-lights-panel--${size}`}>
                {Array.from({ length: lightCount }, (_, index) => (
                    <div
                        key={index}
                        className={getLightClass(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loading;