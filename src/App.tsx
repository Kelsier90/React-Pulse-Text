import Header from "./components/Header";
import Switch from "./components/Switch";
import Route from "./components/Route";
import GettingStarted from "./pages/GettingStarted";
import Api from "./pages/Api";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={GettingStarted} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/api" component={Api} />
      </Switch>
    </>
  );
}

export default App;
