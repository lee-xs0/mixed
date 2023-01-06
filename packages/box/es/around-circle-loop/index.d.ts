import React from 'react';
import './index.less';
interface AroundCircleWrapperProps {
    interval?: number;
    blockW: number;
    blockH: number;
    dataLength: number;
    openLoop?: boolean;
    position: {
        show: boolean;
        wrapperWidth?: number;
        wrapperHeight?: number;
    };
    children?: React.ReactNode;
}
export declare const AroundCircleWrapper: React.FC<AroundCircleWrapperProps>;
interface AroundCircleItemProps {
    num: number;
    children?: React.ReactNode;
}
export declare const AroundCircleItem: React.FC<AroundCircleItemProps>;
export {};
