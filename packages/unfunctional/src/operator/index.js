// @flow

export const add = (aa: number) => (bb: number): number => bb + aa;
export const subtract = (aa: number) => (bb: number): number => bb - aa;
export const multiply = (aa: number) => (bb: number): number => bb * aa;
export const divide = (aa: number) => (bb: number): number => bb / aa;
export const power = (aa: number) => (bb: number): number => bb ** aa;
export const equals = (aa: any) => (bb: any): any => bb === aa;
export const notEquals = (aa: any) => (bb: any): any => bb !== aa;
export const abstractEquals = (aa: any) => (bb: any): any => aa == bb;
export const abstractNotEquals = (aa: any) => (bb: any): any => aa != bb;
export const gt = (aa: number) => (bb: number): boolean => bb > aa;
export const gte = (aa: number) => (bb: number): boolean => bb >= aa;
export const lt = (aa: number) => (bb: number): boolean => bb < aa;
export const lte = (aa: number) => (bb: number): boolean => bb <= aa;
export const not = () => (bb: any): boolean => !bb;
