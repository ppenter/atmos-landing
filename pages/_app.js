import { Container, createTheme, NextUIProvider } from "@nextui-org/react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      primaryLight: "#58C3FF",
      primary: "#14AAFF",
      primaryDark: "#008EDD",
      secondary: "#AEF7F2",
      gradientBackground:
        "linear-gradient(328deg, rgba(54,56,68,1) 0%, rgba(64,66,78,1) 63%, rgba(115,116,126,1) 100%)",
      gradientPrimary:
        "linear-gradient(328deg, rgba(255,40,88,1) 0%, rgba(255,66,92,1) 54%, rgba(255,171,171,1) 100%);",
      link: "#5E1DAD",

      // you can also create your own color
      text: "#fff",
      background: "#000",
      card: "#191A1F",
      disable: "#45464A",

      // ...  more colors
    },
    space: {},
    fonts: {},
    fontSizes: {
      sm: "18",
    },
    fontWeights: {
      bold: "700",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Navbar />
      <Container css={{ paddingTop: "5rem" }}>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;
