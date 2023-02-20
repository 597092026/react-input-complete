import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Items from "./Items";
import Autocomplete from "./Autocomplete";



var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        
        <Autocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
          "Test",
          "Bug",
          "Code",
          "Deep Learning",
          "Fresh",
          "Hooks",
          "Garden",
          "Solaris",
          "Varnish",
          "Push and Pull"
        ]}
      />
    </div>,
    destination
);