import { useState } from "react";
import Link from "../link/Link";
import { MdMenuOpen, MdMenu  } from "react-icons/md";

const NaveBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/user/:username", name: "User Profile" },
        { id: 5, path: "*", name: "404 Not Found" },
      ];



      const [open, setOpen] = useState(false);



console.log(open);

    return (
       <>
              <div onClick={()=> setOpen(!open)} className="md:hidden  bg-amber-200 text-3xl p-6">
                  {
                    open === true ? <MdMenu/> : <MdMenuOpen/>
                  }
                  </div>


             <ul className={`md:flex duration-1000 gap-6 p-6 font-bold text-2xl md:mt-0 absolute md:static hover:bg-sky-700 bg-amber-200  ${open === false ? 'top-26':'-top-96' }`}>

       {
        routes.map(route => <Link key={route.id} route={route}></Link>)
       }
       </ul>

       <div className="font-bold text-2xl">
        
      
        
       </div>

       
       </>
    );
};

export default NaveBar;