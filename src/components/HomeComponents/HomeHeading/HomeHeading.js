import "./HomeHeading.css"

function HomeHeading(props) {

    const name = props.name;

    return(
        <div className="home-heading-container">
            <h1 className="h1-heading">`Hello ${ name }`!</h1>
            <h2 className="h2-heading">Make a wish!</h2>
        </div>
    );
}

export default HomeHeading;