// @flow

//
// Standard
export const fromCharCode = () => (aa: number) => String.fromCharCode(aa);
export const fromCodePoint = () => (aa: number) => String.fromCodePoint(aa);


//
// Methods
export const charAt = (bb: number) => (aa: string) => aa.charAt(bb);
export const charCodeAt = (bb: number) => (aa: string) => aa.charCodeAt(bb);
export const codePointAt = (bb: number) => (aa: string) => aa.codePointAt(bb);
export const concat = (bb: string) => (aa: string) => aa.concat(bb);
export const endsWith = (bb: string) => (aa: string) => aa.endsWith(bb);
export const includes = (bb: string) => (aa: string) => aa.includes(bb);
export const indexOf = (bb: string) => (aa: string) => aa.indexOf(bb);
export const lastIndexOf = (bb: string) => (aa: string) => aa.lastIndexOf(bb);
export const localeCompare = (bb: string) => (aa: string) => aa.localeCompare(bb);
export const match = (bb: RegExp) => (aa: string) => aa.match(bb);
export const normalize = (bb: string) => (aa: string) => aa.normalize(bb);
export const padEnd = (length: number, padString?: string) => (aa: string) => aa.padEnd(length, padString);
export const padStart = (length: number, padString?: string) => (aa: string) => aa.padStart(length, padString);
export const repeat = (bb: number) => (aa: string) => aa.repeat(bb);
export const replace = (match: string|RegExp, replace: string|Function) => (aa: string) => aa.replace(match, replace);
export const search = (bb: string) => (aa: string) => aa.search(bb);
export const slice = (begin: number, end?: number) => (aa: string) => aa.slice(begin, end);
export const split = (bb: string) => (aa: string) => aa.split(bb);
export const substring = (begin: number, end?: number) => (aa: string) => aa.substring(begin, end);
export const startsWith = (bb: string) => (aa: string) => aa.startsWith(bb);
export const toString = () => (aa: string) => aa.toString();
export const trim = () => (aa: string) => aa.trim();
export const trimLeft = () => (aa: string) => aa.trimLeft();
export const trimRight = () => (aa: string) => aa.trimRight();
export const toLocaleLowerCase = () => (aa: string) => aa.toLocaleLowerCase();
export const toLocaleUpperCase = () => (aa: string) => aa.toLocaleUpperCase();
export const toLowerCase = () => (aa: string) => aa.toLowerCase();
export const toUpperCase = () => (aa: string) => aa.toUpperCase();
export const valueOf = () => (aa: string) => aa.valueOf();

