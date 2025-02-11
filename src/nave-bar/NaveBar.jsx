import Link from "../link/Link";

const NaveBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/user/:username", name: "User Profile" },
        { id: 5, path: "*", name: "404 Not Found" },
      ];

    return (
       <>
             <ul className="md:flex gap-6 font-bold text-2xl">

       {
        routes.map(route => <Link key={route.id} route={route}></Link>)
       }
       </ul>
       </>
    );
};

export default NaveBar;