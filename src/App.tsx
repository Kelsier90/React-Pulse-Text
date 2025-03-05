import Header from "./components/Header";
import Switch from "./components/Switch";
import Route from "./components/Route";
import GettingStarted from "./pages/GettingStarted";
import Api from "./pages/Api";
import ThemeProvider from "./components/ThemeProvider";
import Playground from "./pages/Playground";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Switch>
        <Route path="/" component={GettingStarted} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/api" component={Api} />
        <Route path="/playground" component={Playground} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
