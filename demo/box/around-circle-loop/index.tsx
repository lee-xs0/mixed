/*
 * @Author: atwLee
 * @Date: 2022-12-29 19:41:41
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-07 08:32:07
 * @Description: demo--box/绕圆轮播盒子
 * @FilePath: /al-mixed/demo/box/around-circle-loop/index.tsx
 */
import React from 'react';
import { AroundCircleWrapper, AroundCircleItem } from '@al-mixed/box';
const Index = () => {
  let dataArr = [
    {
      name: 'JAVA',
    },
    {
      name: 'C',
    },
    {
      name: 'Python',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'React',
    },
    {
      name: 'Vue',
    },
    {
      name: 'Webpack',
    },
    {
      name: 'UI',
    },
    {
      name: 'NPM',
    },
    {
      name: 'GitHub',
    },
    {
      name: 'Three',
    },
  ];
  return (
    <div
      style={{
        position: 'relative',
        height: '310px',
        background: 'linear-gradient(to right, #56ccf2, #2f80ed)',
      }}
    >
      <AroundCircleWrapper
        blockW={170}
        blockH={100}
        dataLength={dataArr.length}
        position={{
          show: false,
        }}
      >
        {dataArr.map((item, index) => {
          return (
            <AroundCircleItem key={index} num={index}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                }}
              >
                <div style={{ height: '100%', textAlign: 'center' }}>{item.name}</div>
              </div>
            </AroundCircleItem>
          );
        })}
      </AroundCircleWrapper>
    </div>
  );
};
export default Index;
