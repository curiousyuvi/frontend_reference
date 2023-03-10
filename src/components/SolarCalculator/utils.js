export function valuetext(value) {
    console.log(value)
    return `${value * 100} Inr`;
  }

  export const statesData = [
    {
       type: 'b',
       state: 'Andaman and Nicobar Islands',
       ghi: '1156.39',
       teg: '4.6',
    },
    { type: 'a', state: 'Andhra Pradesh', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Arunachal Pradesh', ghi: '1046.26', teg: '4.1' },
    { type: 'b', state: 'Assam', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'Bihar', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Chandigarh', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Chattisgarh', ghi: '1266.52', teg: '5.0' },
    {
       type: 'a',
       state: 'Dadra and Nagar Haveli',
       ghi: '1266.52',
       teg: '5.0',
    },
    { type: 'a', state: 'Goa', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Gujarat', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Haryana', ghi: '1156.39', teg: '4.6' },
    { type: 'b', state: 'Himachal Pradesh', ghi: '1046.26', teg: '4.1' },
    { type: 'b', state: 'Jammu and Kashmir', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'Jharkhand', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Karnataka', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Kerala', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Ladakh', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Lakshadeep', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Madhya Pradesh', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Maharashtra', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Manipur', ghi: '1046.26', teg: '4.1' },
    { type: 'b', state: 'Meghalya', ghi: '1046.26', teg: '4.1' },
    { type: 'b', state: 'Mizoram', ghi: '1046.26', teg: '4.1' },
    { type: 'b', state: 'Nagaland', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'Nct of Delhi', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Orissa', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Puducherry', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Punjab', ghi: '1156.39', teg: '4.6' },
    { type: 'a', state: 'Rajasthan', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Sikkim', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'Tamil Nadu', ghi: '1266.52', teg: '5.0' },
    { type: 'a', state: 'Telangana', ghi: '1266.52', teg: '5.0' },
    { type: 'b', state: 'Tripura', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'Uttar Pradesh', ghi: '1156.39', teg: '4.6' },
    { type: 'b', state: 'Uttarakhand', ghi: '1046.26', teg: '4.1' },
    { type: 'a', state: 'West Bengal', ghi: '1156.39', teg: '4.6' },
 ];

 export const banksData = {
    axis: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 13 },
       { months: 12, rate: 13 },
    ],
    icici: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 13 },
       { months: 12, rate: 13 },
    ],
    hsbc: [
       { months: 3, rate: 12.5 },
       { months: 6, rate: 12.5 },
       { months: 9, rate: 13.5 },
       { months: 12, rate: 13.5 },
       { months: 18, rate: 13.5 },
    ],
    kotak: [
       { months: 3, rate: 12 },
       { months: 6, rate: 12 },
       { months: 9, rate: 14 },
       { months: 12, rate: 14 },
       { months: 18, rate: 15 },
       { months: 24, rate: 15 },
    ],
    cbi: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 14 },
       { months: 12, rate: 14 },
    ],
    corp: [
       { months: 3, rate: 12 },
       { months: 6, rate: 12 },
       { months: 9, rate: 13 },
       { months: 12, rate: 14 },
    ],
    indusind: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 13 },
       { months: 12, rate: 13 },
       { months: 18, rate: 15 },
       { months: 24, rate: 15 },
    ],
    rbl: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 13 },
       { months: 12, rate: 13 },
       { months: 18, rate: 3 },
       { months: 24, rate: 13 },
    ],
    sc: [
       { months: 3, rate: 13 },
       { months: 6, rate: 13 },
       { months: 9, rate: 14 },
       { months: 12, rate: 14 },
       { months: 18, rate: 15 },
       { months: 24, rate: 15 },
    ],
    yes: [
       { months: 3, rate: 12 },
       { months: 6, rate: 12 },
       { months: 9, rate: 13 },
       { months: 12, rate: 13 },
       { months: 18, rate: 14 },
       { months: 24, rate: 15 },
    ],
    sbi: [
       { months: 3, rate: 14 },
       { months: 6, rate: 14 },
       { months: 9, rate: 14 },
       { months: 12, rate: 14 },
    ],
    instacred: [
       { months: 3, rate: 18 },
       { months: 6, rate: 18 },
       { months: 9, rate: 18 },
       { months: 12, rate: 18 },
       { months: 18, rate: 18 },
       { months: 24, rate: 18 },
       { months: 48, rate: 18 },
    ],
 };