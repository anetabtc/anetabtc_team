import React from 'react';
import ReactDOM from 'react-dom/client';
import  { useEffect } from 'react';
import {createContext, useState} from 'react';
import background1 from "./background.png";
import background2 from "./background2.png";
import sun from "./sun.png"
import moon from "./moon.png"
import logo1 from "./anetaLogo.png"
import logo2 from "./anetaLogoDark.png"

const themes = {
  dark: {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), RGBA(172,204,234,1)), url(${background1})` ,
backgroundFooter: `linear-gradient(to bottom, RGBA(172,204,234,1), RGBA(237,248,253,1)), url(${background1})` ,
    color: "black",
    backColor: "#ffffff",
    imgconf: 'invert(0)',
    imgconf1: 'invert(1)',
    imgconf2: 'invert(0)',
    links: "black",
    label: "#002030",
sun: `${moon}`,
    trans: '1s',
    logo: `${logo2}`,
    list: "#E4F4FC",
  },
  light: {
    backgroundImage: `linear-gradient(to bottom, transparent, #172D3D),url(${background2})`,
backgroundFooter: `linear-gradient(to bottom, RGBA(23,45,61,1), RGBA(8,19,26,1)), url(${background1})` ,
    color: "white",
    backColor: '#18191a',
    imgconf: 'invert(1)',
    imgconf1: 'invert(0)',
    imgconf2: 'invert(1)',
    links: "#c1cad0",
    label: "white",
  sun: `${sun}`,
    trans: '1s',
    logo: `${logo1}`,
    list: "#141b22",
  },
}

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === "true"
    setIsDark(isDark);
  }, [])
  return (
    <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
  );
}


export default ThemeProvider
