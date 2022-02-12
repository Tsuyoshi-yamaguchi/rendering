import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/lineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
    </div>
  );
}
