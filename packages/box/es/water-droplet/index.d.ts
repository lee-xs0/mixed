import React from 'react';
import './index.css';
type embellishmentType = {
    position?: {
        top?: string;
        left?: string;
    };
    backgroundColor?: string;
};
interface WaterDropletProps {
    width?: number;
    height?: number;
    className?: string;
    borderRadius?: string;
    backgroundColor?: string;
    embellishment?: embellishmentType;
    shadowColor?: string;
    children?: React.ReactNode;
}
declare function WaterDroplet(props: WaterDropletProps): JSX.Element;
export default WaterDroplet;
