import { TiTick } from "react-icons/ti"
const Option = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className=" p-8  bg-sky-300 rounded-2xl bg-center flex flex-col bg-cover">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h1 className="font-semibold">{price} $</h1>
           <div className="flex-grow">
           <h1 className="gap-4 mt-6 flex flex-col">{features.map(catagory => <span key={catagory.index}> <span className="flex justify-start items-center gap-4"> <span className="text-2xl bg-amber-200 p-2 rounded-2xl text-white"><TiTick /></span> <span> {catagory}</span></span>  </span> )}</h1>


           </div>
            <div className="btn btn-primary mt-4 ">Enroll Now</div>
        </div>
    );
};



export default Option;