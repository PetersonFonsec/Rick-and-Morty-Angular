export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    //Colors
    '--primary': '#78bdf2',
    '--secondary': '#efeb47',
    '--text-color': '#464646',
    '--text-color-contrast': '#fff',
    '--background': '#eff2eb',
    //Grid
    '--grid': '1400px',
    //Transition
    '--transition': '0.3s',
    //Layers
    '--menu': '1',
    '--modal': '2',
    '--loading': '3',
  },
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    //Colors
    '--primary': '#efeb47',
    '--secondary': '#78bdf2',
    '--text-color': '#fff',
    '--text-color-contrast': '#464646',
    '--background': '#303030',
    //Grid
    '--grid': '1400px',
    //Transition
    '--transition': '0.3s',
    //Layers
    '--menu': '1',
    '--modal': '2',
    '--loading': '3',
  },
};
