/*
 * @Author: atwLee
 * @Date: 2021-12-28 11:03:41
 * @LastEditors: atwLee
 * @LastEditTime: 2022-12-29 22:48:55
 * @FilePath: /al-mixed/packages/box/src/around-circle-loop/index.tsx
 * @Description: 绕圈轮播组件
 */
import React, { useEffect, useRef, useState, useContext, useMemo } from 'react';
import classNames from 'classnames';
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

const LoopParamContext = React.createContext({});
export const AroundCircleWrapper: React.FC<AroundCircleWrapperProps> = props => {
  const { interval = 3000, blockW, blockH, dataLength, openLoop = true, position } = props;
  let [animateNum, setAnimateNum] = useState(0);
  const timer = useRef<any>();
  useEffect(() => {
    openLoop && startLoop(); // 开启数据块轮播
    return () => {
      clearInterval(timer.current);
      setAnimateNum(0);
    };
  }, []);

  function startLoop() {
    timer.current = setInterval(() => {
      setAnimateNum(animateNum++);
    }, interval);
  }
  const contextValue = useMemo(() => ({ animateNum, blockW, blockH, dataLength }), [animateNum]);
  return (
    <LoopParamContext.Provider value={contextValue}>
      <div
        className="alm-box-dimensionLayer"
        style={
          position.show
            ? {
                position: 'relative',
                width: `${position.wrapperWidth}px`,
                height: `${position.wrapperHeight}px`,
              }
            : {}
        }
      >
        <div className="alm-box-dimensionWrapper">{props.children}</div>
      </div>
    </LoopParamContext.Provider>
  );
};

interface AroundCircleItemProps {
  num: number;
  children?: React.ReactNode;
}

export const AroundCircleItem: React.FC<AroundCircleItemProps> = props => {
  const { num } = props;
  const { animateNum, blockW, blockH, dataLength }: any = useContext(LoopParamContext);
  // 判断不在屏幕显示的其他的item
  function isDimensionOther(animateNum: number, index: number, dataLength: number): boolean {
    if (
      (animateNum + index) % dataLength !== 0 &&
      (animateNum + index) % dataLength !== 1 &&
      (animateNum + index) % dataLength !== 2 &&
      (animateNum + index) % dataLength !== 3 &&
      (animateNum + index) % dataLength !== 4 &&
      (animateNum + index) % dataLength !== dataLength - 1 &&
      (animateNum + index) % dataLength !== dataLength - 2 &&
      (animateNum + index) % dataLength !== dataLength - 3
    )
      return true;
    else return false;
  }
  return (
    <div
      className={classNames(
        'alm-box-dimensionItem',
        { 'alm-box-dimensionItem0': (animateNum + num) % dataLength === 0 },
        { 'alm-box-dimensionItem1': (animateNum + num) % dataLength === 1 },
        { 'alm-box-dimensionItem2': (animateNum + num) % dataLength === 2 },
        { 'alm-box-dimensionItem3': (animateNum + num) % dataLength === 3 },
        { 'alm-box-dimensionItem4': (animateNum + num) % dataLength === 4 },
        {
          'alm-box-dimensionItemL1': (animateNum + num) % dataLength === dataLength - 1,
        },
        {
          'alm-box-dimensionItemL2': (animateNum + num) % dataLength === dataLength - 2,
        },
        {
          'alm-box-dimensionItemL3': (animateNum + num) % dataLength === dataLength - 3,
        },
        {
          'alm-box-dimensionItemOther': isDimensionOther(animateNum, num, dataLength),
        },
      )}
      style={{
        width: `${blockW}px`,
        height: `${blockH}px`,
        left: `calc(50% - ${blockW / 2}px)`,
      }}
    >
      {props.children}
    </div>
  );
};
