import ThemeData from './config/ThemeData';
import { toggleTheme } from './services/themeService';

export function initializeKasaTheme() {
  toggleTheme(ThemeData.LIGHT_THEME);
}

export default initializeKasaTheme;
