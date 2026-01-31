import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";


export const deliveryOption = [{
       id:'1',
       deliveryDays:7,
       priceCents:0
    },
    { 
       id:'2',
       deliveryDays:5,
       priceCents:499
    },
    { 
       id:'3',
       deliveryDays:1,
       priceCents:999
    }

];


export function getDeliveryOption(deliveryOptionId){
    let deliveryOptions;
    deliveryOption.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOptions = option;
      }
    });

    return deliveryOptions || deliveryOptions[0];
}

export  function calculateDeliveryDate(deliveryDays) {
    let deliveryDate = dayjs();
    let remainingDays = deliveryDays;

    while (remainingDays > 0) {
      deliveryDate = deliveryDate.add(1, 'day');

      const day = deliveryDate.day(); // 0 = Sun, 6 = Sat

      if (day !== 0 && day !== 6) {
        remainingDays--;
      }
    }

    return deliveryDate;
  }