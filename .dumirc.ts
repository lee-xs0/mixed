/*
 * @Author: atwLee
 * @Date: 2022-12-30 10:30:31
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-06 18:30:11
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
      { title: '资产', link: '/resources' },
    ],
    footer: `Open-source MIT Licensed | Copyright © 2023-ATW-Lee
<br />
Powered by self`,
  },
  ssr: process.env.NODE_ENV === 'development' ? false : {},
  sitemap: { hostname: '/' },
});
