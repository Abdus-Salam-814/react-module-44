import Option from "../priceOption/Option";

const BestPrices = () => {
    const myGimPrice = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Extended gym hours"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 69.99,
          "features": [
            "24/7 gym access",
            "Access to all classes",
            "Personal trainer (2 sessions/month)",
            "Sauna & spa access"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 99.99,
          "features": [
            "Unlimited personal training",
            "VIP lounge access",
            "Nutritional consultation",
            "Free guest passes"
          ]
        }
      ];
      
    return (
        <div className="mt-6"> <h1 >Best prices in Town</h1>
        <div className="grid grid-cols-3 gap-12 mt-4 ">
            
        {
            myGimPrice.map(option => <Option option={option} key={option.id}> </Option>)
        }

        </div>
        </div>
    );
};

export default BestPrices;