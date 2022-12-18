const useSolarCalculator = () => {
  const calculate = ({
    mnreCostData,
    averageMnreCost,
    statesData,
    calcType,
    inputs,
  }) => {
    if (calcType === "solar_panel_capacity") {
      let mnreCost = 0;
      if (statesData[inputs.state].type === "a") {
        if (inputs.solar_panel_capacity <= 1)
          mnreCost = mnreCostData.typeA.upto1;
        else if (inputs.solar_panel_capacity <= 2)
          mnreCost = mnreCostData.typeA.from1to2;
        else if (inputs.solar_panel_capacity <= 3)
          mnreCost = mnreCostData.typeA.from2to3;
        else if (inputs.solar_panel_capacity <= 10)
          mnreCost = mnreCostData.typeA.from3to10;
        else if (inputs.solar_panel_capacity <= 100)
          mnreCost = mnreCostData.typeA.from10to100;
        else mnreCost = mnreCostData.typeA.from100to500;
      } else {
        if (inputs.solar_panel_capacity <= 1)
          mnreCost = mnreCostData.typeB.upto1;
        else if (inputs.solar_panel_capacity <= 2)
          mnreCost = mnreCostData.typeB.from1to2;
        else if (inputs.solar_panel_capacity <= 3)
          mnreCost = mnreCostData.typeB.from2to3;
        else if (inputs.solar_panel_capacity <= 10)
          mnreCost = mnreCostData.typeB.from3to10;
        else if (inputs.solar_panel_capacity <= 100)
          mnreCost = mnreCostData.typeB.from10to100;
        else mnreCost = mnreCostData.typeB.from100to500;
      }
      return {
        ...inputs,
        budget: inputs.solar_panel_capacity * mnreCost,
        total_electricity_generation_monthly:
          inputs.solar_panel_capacity * statesData[inputs.state].teg * 30,
        tariff_monthly:
          inputs.solar_panel_capacity *
          statesData[inputs.state].teg *
          30 *
          inputs.average_electricity_cost,
        shadow_free_area: inputs.solar_panel_capacity * 10,
        mnre_cost: mnreCost,
        mnre_subsidy:
          inputs.category === "Residential"
            ? inputs.solar_panel_capacity <= 3
              ? 40
              : inputs.solar_panel_capacity <= 10
              ? 20
              : 0
            : 0,
      };
    }
    if (calcType === "total_rooftop_area") {
      const spc = inputs.total_rooftop_area / 10;
      let mnreCost = 0;
      if (statesData[inputs.state].type === "a") {
        if (spc <= 1) mnreCost = mnreCostData.typeA.upto1;
        else if (spc <= 2) mnreCost = mnreCostData.typeA.from1to2;
        else if (spc <= 3) mnreCost = mnreCostData.typeA.from2to3;
        else if (spc <= 10) mnreCost = mnreCostData.typeA.from3to10;
        else if (spc <= 100) mnreCost = mnreCostData.typeA.from10to100;
        else mnreCost = mnreCostData.typeA.from100to500;
      } else {
        if (spc <= 1) mnreCost = mnreCostData.typeB.upto1;
        else if (spc <= 2) mnreCost = mnreCostData.typeB.from1to2;
        else if (spc <= 3) mnreCost = mnreCostData.typeB.from2to3;
        else if (spc <= 10) mnreCost = mnreCostData.typeB.from3to10;
        else if (spc <= 100) mnreCost = mnreCostData.typeB.from10to100;
        else mnreCost = mnreCostData.typeB.from100to500;
      }
      return {
        ...inputs,
        solar_panel_capacity: spc,
        budget: spc * mnreCost,
        total_electricity_generation_monthly:
          spc * statesData[inputs.state].teg * 30,
        tariff_monthly:
          spc *
          statesData[inputs.state].teg *
          30 *
          inputs.average_electricity_cost,
        shadow_free_area: inputs.total_rooftop_area,
        mnre_cost: mnreCost,
        mnre_subsidy:
          inputs.category === "Residential"
            ? spc <= 3
              ? 40
              : spc <= 10
              ? 20
              : 0
            : 0,
      };
    }
    if (calcType === "your_budget") {
      const spc = Math.floor(inputs.budget / averageMnreCost);
      let mnreCost = 0;
      if (statesData[inputs.state].type === "a") {
        if (spc <= 1) mnreCost = mnreCostData.typeA.upto1;
        else if (spc <= 2) mnreCost = mnreCostData.typeA.from1to2;
        else if (spc <= 3) mnreCost = mnreCostData.typeA.from2to3;
        else if (spc <= 10) mnreCost = mnreCostData.typeA.from3to10;
        else if (spc <= 100) mnreCost = mnreCostData.typeA.from10to100;
        else mnreCost = mnreCostData.typeA.from100to500;
      } else {
        if (spc <= 1) mnreCost = mnreCostData.typeB.upto1;
        else if (spc <= 2) mnreCost = mnreCostData.typeB.from1to2;
        else if (spc <= 3) mnreCost = mnreCostData.typeB.from2to3;
        else if (spc <= 10) mnreCost = mnreCostData.typeB.from3to10;
        else if (spc <= 100) mnreCost = mnreCostData.typeB.from10to100;
        else mnreCost = mnreCostData.typeB.from100to500;
      }
      return {
        ...inputs,
        budget: spc * mnreCost,
        solar_panel_capacity: spc,
        total_electricity_generation_monthly:
          spc * statesData[inputs.state].teg * 30,
        tariff_monthly:
          spc *
          statesData[inputs.state].teg *
          30 *
          inputs.average_electricity_cost,
        shadow_free_area: spc * 10,
        mnre_cost: mnreCost,
        mnre_subsidy:
          inputs.category === "Residential"
            ? spc <= 3
              ? 40
              : spc <= 10
              ? 20
              : 0
            : 0,
      };
    }
  };

  return calculate;
};

export default useSolarCalculator;
