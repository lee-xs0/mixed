/*
 * @Author: atwLee
 * @Date: 2023-01-07 23:57:20
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-07 23:59:00
 * @Description:
 * @FilePath: /al-mixed/demo/box/water-droplet/other.tsx
 */
import React from 'react';
import { WaterDroplet } from '@al-mixed/box';
function Index() {
  return (
    <WaterDroplet
      width={120}
      height={120}
      embellishment={{
        position: { top: '35px', left: '30px' },
        backgroundColor: 'rgba(255,255,255,0.45)',
      }}
      borderRadius={'75% 25% 68% 32% / 29% 70% 30% 71%'}
      backgroundColor="#01b4ff"
      shadowColor="rgb(1,180,255)"
    />
  );
}

export default Index;
