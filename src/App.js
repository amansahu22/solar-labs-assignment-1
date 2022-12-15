import React, { useState } from "react";
import {
  YearOneCard,
  YearTwoCard,
  YearThreeCard,
  YearsCard,
} from "./components";

const App = () => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const handleChnageOne = () => setShowOne((prev) => !prev);
  const handleChnageTwo = () => setShowTwo((prev) => !prev);
  const handleChnageThree = () => setShowThree((prev) => !prev);

  const actions = {
    actionOne: handleChnageOne,
    actionTwo: handleChnageTwo,
    actionThree: handleChnageThree,
  };

  return (
    <div className="w-3/5 bg-red-600 flex flex-col m-auto">
      <YearsCard actions={actions} />
      {showOne && <YearOneCard />}
      {showTwo && <YearTwoCard />}
      {showThree && <YearThreeCard />}
    </div>
  );
};

export default App;
