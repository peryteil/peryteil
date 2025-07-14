import "./App.css";
import CardContainer from "./pages/CardContainer";
import UserContainer from "./pages/UseContainer";
import AlignTest from "./pages/AlignTest";
import JustifyCenterTest from "./pages/JustifyCenterTest";
import MinMaxTest from "./pages/MinMaxTest";
import WrapTest from "./pages/WrapTest";
import DirectionTest from "./pages/DirectionTest";

export default function App() {
  return (
    <main>
    <CardContainer/>
    <UserContainer/>
    <AlignTest/>
    <JustifyCenterTest/>
    <MinMaxTest/>
    <WrapTest/>
    <DirectionTest/>
    </main>
  )
}
