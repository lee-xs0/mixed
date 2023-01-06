/*
 * @Author: atwLee
 * @Date: 2022-12-28 20:05:33
 * @LastEditors: atwLee
 * @LastEditTime: 2022-12-29 17:41:37
 * @Description: father打包配置文件
 * @FilePath: /al-mixed/.fatherrc.ts
 */
import { readdirSync } from 'fs';
import { join } from 'path';

// utils must build before core
// runtime must build before renderer-react
const headPkgs: string[] = ['utils'];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

export default {
  cjs: {
    type: 'babel',
    lazy: true,
  },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  pkgs: [...headPkgs, ...tailPkgs],
  extraBabelPlugins: [['babel-plugin-import', { libraryName: 'al-mixed', libraryDirectory: 'es', style: true }, 'al-mixed']],
};
