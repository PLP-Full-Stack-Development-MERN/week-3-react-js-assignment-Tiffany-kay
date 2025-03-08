import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

const App = () => (
  <div className="min-h-screen bg-gray-50 p-6">
    <Header />
    <Profile name="Tiffany" email="tiffany@example.com" />
    <Counter />
  </div>
);

export default App;
