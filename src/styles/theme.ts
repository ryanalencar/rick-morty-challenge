type Color = Partial<Record<'default' | 'light' | 'dark', string>>;

interface ITheme {
  colors: {
    white: string;
    black: string;
    error: string;
    text: string;
    gray: Color;
    purple: Color
    green: Color
  };
}

export const theme: ITheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    text: '#C4C4CC',
    error: '#CC2937',
    gray: {
      dark: '#121214',
      default: '#202024',
      light: '#323238',
    },
    purple: {
      default: '#8257E5',
      light: '#996DFF',
      dark: '#633BBC',
    },
    green: {
      default: '#00875F',
      light: '#00B37E',
      dark: '#015F43',
    },
  },
};
