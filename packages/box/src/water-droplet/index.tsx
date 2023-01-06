/*
 * @Author: atwLee
 * @Date: 2022-12-24 10:15:57
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-06 22:20:31
 * @Description: 水滴形状的box
 * @FilePath: /al-mixed/packages/box/src/water-droplet/index.tsx
 */
import React from 'react';
import { useEffect, useRef } from 'react';
import { hexToRgba, regRgbaFormat, rgbaToHex } from '@al-mixed/utils';
import './index.css';

type embellishmentType = {
  position?: {
    top?: string;
    left?: string;
  };
  backgroundColor?: string;
};

interface WaterDropletProps {
  width?: number; // 该盒子的宽
  height?: number; // 该盒子的高
  className?: string; // 该盒子的样式名，方便使用时增加额外样式
  borderRadius?: string; // 水滴状的borderRadius
  backgroundColor?: string; // 该盒子的背景颜色
  embellishment?: embellishmentType; // 水滴上两个小点缀的属性，包括位置及背景颜色
  shadowColor?: string; // 阴影的颜色
  children?: React.ReactNode; // 子元素
}

function WaterDroplet(props: WaterDropletProps) {
  const {
    width = 350,
    height = 350,
    children,
    className = '',
    borderRadius = '52% 48% 33% 67% / 38% 45% 55% 62%',
    backgroundColor = '#eff0f2',
    embellishment,
    shadowColor,
  } = props;

  const waterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // set water droplet width and height
    waterRef.current?.style.setProperty('--droplet-width', width + 'px');
    waterRef.current?.style.setProperty('--droplet-height', height + 'px');
    // set embellishment width and height
    waterRef.current?.style.setProperty(
      '--embellishmentWH',
      `${Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 14}px`,
    );
    // set embellishment position and background color
    if (embellishment) {
      waterRef.current?.style.setProperty('--embellishmentL', embellishment.position?.left ?? null);
      waterRef.current?.style.setProperty('--embellishmentT', embellishment.position?.top ?? null);
      waterRef.current?.style.setProperty(
        '--embellishmentBKC',
        embellishment.backgroundColor ?? null,
      );
    }
    // set shadow color
    if (shadowColor) {
      let newShadowColor = '';
      if (shadowColor.includes('#') && hexToRgba(shadowColor).rgba !== 'error') {
        newShadowColor = hexToRgba(shadowColor).rgba;
      } else if (regRgbaFormat(shadowColor)) {
        newShadowColor = hexToRgba(rgbaToHex(shadowColor, 0.05).hexa!).rgba;
      } else {
        console.warn('Please check the color format————', shadowColor);
      }
      if (newShadowColor !== '') {
        waterRef.current?.style.setProperty('--shadowColor', newShadowColor);
      }
    }
  }, [width, height, embellishment, shadowColor]);

  return (
    <div
      style={{ borderRadius, backgroundColor }}
      className={`alm-box-water-droplet ${className}`}
      ref={waterRef}
    >
      {children}
    </div>
  );
}

export default WaterDroplet;
