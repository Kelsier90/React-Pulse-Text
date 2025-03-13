import Header from "./components/Header";
import Switch from "./components/Switch";
import Route from "./components/Route";
import GettingStarted from "./pages/GettingStarted";
import Api from "./pages/Api";
import ThemeProvider from "./components/ThemeProvider";
import Playground from "./pages/Playground";
import Error404 from "./pages/Error404";
import Router from "./components/Router";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route path="/" component={GettingStarted} />
          <Route path="/getting-started" component={GettingStarted} />
          <Route path="/api-reference" component={Api} />
          <Route path="/playground" component={Playground} />
          <Route path="*" component={Error404} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
