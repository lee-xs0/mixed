/*
 * @Author: atwLee
 * @Date: 2023-01-07 23:59:42
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-07 23:59:50
 * @Description:
 * @FilePath: /al-mixed/demo/box/water-droplet/blue.tsx
 */
import React from 'react';
import { WaterDroplet } from '@al-mixed/box';
function Index() {
  return (
    <WaterDroplet
      width={120}
      height={120}
      embellishment={{
        position: { top: '15px', left: '30px' },
        backgroundColor: 'rgba(255,255,255,0.45)',
      }}
      borderRadius={'34% 66% 65% 35% / 57% 58% 42% 43%'}
      backgroundColor="#c61dff"
      shadowColor="rgba(190,1,254,0.1)"
    />
  );
}

export default Index;
