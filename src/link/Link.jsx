import PropTypes from "prop-types";

const Link = ({route}) => {

    const {name, path} = route;
    return (
        
             <li > 
                <a href={path}> {name} </a>
                </li>
           
            
    );
};

Link.propTypes ={
    route: PropTypes.shape({
        path:PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default Link;