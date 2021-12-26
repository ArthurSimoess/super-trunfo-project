import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import Card from "../components/card";
import CreateGameForms from "../components/CreateGameForms";
import CreateGameHeader from "../components/CreateGameHeader";
import CreateCardsList from "../components/CreateCardsList";
import BtnFinishDeck from "../components/BtnFinishDeck";

function CreateGame() {
  const { providerValues: { formsValues } }= useContext(MyContext);
  const { name, description, firstAttr, secondAttr, thirdAttr,
    img, rarity, cardTrunfo } = formsValues;

  return(
    <div className="bg-gray-500 h-screen">
      <CreateGameHeader />
      <div className="text-white flex w-screen bg-Card-Dark bg-opacity-70 bg-cover bg-center">
        <CreateGameForms />
        <Card 
          name={ name }
          description={ description }
          firstAttr={ firstAttr }
          secondAttr={ secondAttr }
          thirdAttr={ thirdAttr }
          img={ img }
          rarity={ rarity }
          cardTrunfo={ cardTrunfo }
        />
      </div>
      <CreateCardsList />
      {
        <BtnFinishDeck />
      }
    </div>
  )
}

export default CreateGame;