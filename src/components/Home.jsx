import Products from "./Products";
import Slider from "./Slider";
import "../index.css";

const Home = () => {
    return (
        <div className="main">
            <Slider />
            <Products />
        </div>
    );
};

export default Home;
