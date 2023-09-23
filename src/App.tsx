import ThemeProvider from "./theme/ThemeProvider";
import { RootRoutes } from "./routes";
function App() {
  return (
    <ThemeProvider>
      <RootRoutes />
    </ThemeProvider>
  );
}

export default App;
