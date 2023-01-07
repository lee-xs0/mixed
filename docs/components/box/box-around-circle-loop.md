---
title: 绕圆轮播
toc: content
---

# 绕圆轮播

视觉为绕某一圆点轮播的动画效果

## 代码演示

<!-- <code src="../../demo/box/around-circle-loop" title='基础使用'></code> -->

## API

### AroundCircleWrapperProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| interval | 轮播时间间隔 | `number` | `3000` |
| blockW | item 宽 | `number` | `require` |
| blockH | item 高 | `number` | `require` |
| dataLength | 数据长度，填写--数据.length--即可。最少为 8 个 | `number` | `require` |
| openLoop | 是否开启轮播 | `boolean` | `true` |
| position | 整个组件是相对/绝对定位 | [AroundCircleWrapperPosition](#aroundcirclewrapperposition) | `require` |

### AroundCircleWrapperPosition

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | false 为绝对定位，true 为相对定位。相对定位需定义宽高（wrapperWidth,wrapperHeight） | `boolean` | `require` |
| wrapperWidth | 相对定位时该盒子的宽 | `number` | - |
| wrapperHeight | 相对定位时该盒子的高 | `number` | - |

### AroundCircleItemProps

| 参数 | 说明                                 | 类型     | 默认值    |
| ---- | ------------------------------------ | -------- | --------- |
| num  | 控制 item 轮播的索引，传数组下标即可 | `number` | `require` |

## FAQ

1. 轮播时间间隔建议大于 3000ms，否则会出现过渡动画未完成，下一次动画已开始的情况
2. 数据长度建议>=8 个，少了则会出现缺失的情况
3. position 默认为绝对定位，设置为[相对定位](#aroundcirclewrapperposition)需手动开启并设置 wrapperWidth,wrapperHeight
