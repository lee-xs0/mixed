/**
 * @description: rgba => hex
 * @return {*}
 */
export declare const rgbaToHex: (val: string, alpha?: number) => {
    hex: string;
    r: number;
    g: number;
    b: number;
    alpha: string | number;
    hexa: string;
} | {
    hex: string;
    alpha: number;
    r?: undefined;
    g?: undefined;
    b?: undefined;
    hexa?: undefined;
};
/**
 * @description: hex => rgba
 * @param {string} val
 * @return {*}
 */
export declare const hexToRgba: (val: string) => {
    rgba: string;
    r: number;
    g: number;
    b: number;
    a: number;
} | {
    rgba: string;
    r?: undefined;
    g?: undefined;
    b?: undefined;
    a?: undefined;
};
/**
 * @description: 检查是否符合rgba的格式
 * @param {string} val
 * @return {*}
 */
export declare const regRgbaFormat: (val: string) => boolean;
