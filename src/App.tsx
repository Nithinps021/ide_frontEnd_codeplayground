import { useEffect } from "react";
import { Grid, ThemeProvider } from "@mui/material";
import NavBar from "./components/navBar";
import WebTerminal from "./components/webTerminal"
import playgroundTheme from "./theme/playGroundTheme";


function App() {
  return (
    <div className="App">
       <ThemeProvider theme={playgroundTheme}>
            <div>
                <NavBar />
                <WebTerminal/>
            </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
