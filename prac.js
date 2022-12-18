const district = 'barisal';
const customerCategory = 'residential';
const averageElectricityConsumptionCost = 250; // tk

const unitInfo = {
   barisal: {
      residential: [
         {
            min: 0,
            max: 50,
            perUnitCost: 3.15,
            maxCost: 157.5,
            prevMaxCost: 0,
         },
         {
            min: 51,
            max: 100,
            perUnitCost: 3.95,
            maxCost: 355, //157.5 + 50 * 3.95
            prevMaxCost: 157.5,
         },
         {
            min: 101,
            max: 150,
            perUnitCost: 5.0,
            maxCost: 605, //355 + 50 * 5.0,
            prevMaxCost: 355,
         },
         {
            min: 151,
            max: 200,
            perUnitCost: 6.8,
            maxCost: 945, //605 + 50 * 6.8,
            prevMaxCost: 605,
         },
         {
            min: 201,
            max: 250,
            perUnitCost: 8.0,
            maxCost: 1345, //945 + 50 * 8.0,
            prevMaxCost: 945,
         },
         {
            min: 0,
            max: 300,
            perUnitCost: 6.2,
            maxCost: 1860,
            prevMaxCost: 1345,
         },
      ],
      commercial: {},
      industrial: {},
   },
   khulna: {},
   dhaka: {},
};

const findUnit = (dist, category, cost) => {
   const smallerUnits = unitInfo[dist][category].filter(
      (item) => item.maxCost < cost
   );

   const unit = unitInfo[dist][category][smallerUnits.length];

   const remainingCost = cost - unit.prevMaxCost;
   const unitConsumption = remainingCost / unit.perUnitCost;

   return (unitConsumption + unit.min).toFixed(2);
};

console.log(
   findUnit(district, customerCategory, averageElectricityConsumptionCost)
);







