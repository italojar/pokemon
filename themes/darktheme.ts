import { createTheme } from "@nextui-org/react"

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
        // brand colors
        background: '#1E56A0',
        text: '#DBE2EF',
        // you can also create your own color
        myDarkColor: '#ff4ecd',
        // ...  more colors
        accents1: '#163172'
      }, // override dark theme colors
  }
});