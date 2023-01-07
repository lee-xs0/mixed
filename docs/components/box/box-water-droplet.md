---
title: 水滴盒子
order: 0
toc: content
---

# 水滴盒子

外形像水滴一样的盒子

## 代码演示


<!-- <code src="../../demo/box/water-droplet/default.tsx"></code> -->

## API

### WaterDropletProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 该盒子的宽 | `number` | 350 |
| width | 该盒子的高 | `number` | 350 |
| className | 该盒子的样式名，方便使用时增加额外样式 | `string` |  |
| borderRadius | 水滴状的 borderRadius | `string` | 52% 48% 33% 67% / 38% 45% 55% 62% |
| backgroundColor | 该盒子的背景颜色 | `string` | #eff0f2 |
| embellishment | 水滴上两个小点缀的属性，包括位置及背景颜色 | `embellishmentType` | #eff0f2 |
| shadowColor | 该盒子的阴影颜色 | `string` | rgba(0, 0, 0, 0.05) |
| children | 子元素 | `React.ReactNode` |  |

### embellishmentType

| 参数            | 说明   | 类型                       | 默认值                       |
| --------------- | ------ | -------------------------- | ---------------------------- |
| position        | 位置   | `{left:string;top:string}` | {left:'22.85%',top:'14.28%'} |
| backgroundColor | 背景色 | `string`                   | #ffffff                      |
