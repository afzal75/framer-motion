import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson6 from "./pages/Lesson6";
import Lesson7 from "./pages/Lesson7";
import Lesson8 from "./pages/Lesson8";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="h-[200vh] w-full bg-red-500"></div>
      {/* <Lesson1 /> */}
      {/* <Lesson2 /> */}
      {/* <Lesson7 /> */}
      <Lesson8 />
    </div>
  );
};

export default App;