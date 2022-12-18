const district = 'barisal';
const customerCategory = 'residential';
const averageElectricityConsumptionCost = 2000; // tk

const unitInfo = {
   barisal: {
      residential: [
         {
            min: 0,
            max: 50,
            perUnitCost: 3.15,
            maxCost: 157.5,
         },
         {
            min: 51,
            max: 100,
            perUnitCost: 3.95,
            maxCost: 395,
         },
         {
            min: 101,
            max: 150,
            perUnitCost: 5.0,
            maxCost: 750,
         },
         {
            min: 151,
            max: 200,
            perUnitCost: 6.8,
            maxCost: 1360,
         },
         {
            min: 201,
            max: 250,
            perUnitCost: 8.0,
            maxCost: 2000,
         },
         {
            min: 0,
            max: 300,
            perUnitCost: 6.2,
         },
      ],
      commercial: {},
      industrial: {},
   },
   khulna: {},
   dhaka: {},
};

const calculateUnit = (district, customerCategory, averageElectricityConsumptionCost) => {
    const unit = unitInfo[district][customerCategory].find((unit) => {
        return averageElectricityConsumptionCost >= unit.min && averageElectricityConsumptionCost <= unit.max;
    });
    
    return unit;
}

console.log(calculateUnit(district, customerCategory, averageElectricityConsumptionCost));
