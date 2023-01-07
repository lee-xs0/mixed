/*
 * @Author: atwLee
 * @Date: 2022-12-30 10:30:31
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-07 23:40:31
 * @Description: dumi配置危机
 * @FilePath: /al-mixed/.dumirc.ts
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  ],
  autoAlias: false,
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'AL-Mixed',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: 'BOX', link: '/resources/box/box-water-droplet' },
      { title: 'EChatrs', link: '/resources/echarts' },
    ],
    footer: `Open-source MIT Licensed | Copyright © 2023-ATW-Lee
<br />
Powered by self`,
  },
  ssr: process.env.NODE_ENV === 'development' ? false : {},
  sitemap: { hostname: '/' },
});
