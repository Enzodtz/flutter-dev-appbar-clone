import Home from "./pages/Home";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import mainTheme from "themes/main-theme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
