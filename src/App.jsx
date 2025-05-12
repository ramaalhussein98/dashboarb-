import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Cairo, sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
