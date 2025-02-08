import { createRoot } from "react-dom/client";
import './index.css'
import Sreach from './sreach';
const root = createRoot(document.getElementById("root"));


function FoodCard(props) {
    const { image, name, size, price, rating } = props
    return (
        <div>
            <div className="foodCards">
                <div className="">
                    <img src={props.image} className="foodImage"></img>
                    <div className="foodProperty">Name : {props.name}  </div>
                    <div className="foodProperty">Price : {props.price}</div>
                    <div className="foodProperty">Rating : {props.rating}</div>
                    <div className="foodProperty">Size : {props.size} </div>
                </div>
            </div>
            <button className="orderButton">Order Now</button>
            <button className="deliveryButton">Free Delivery</button>
        </div>
    );
}
root.render(
    <>
        <h1 className="cardHeading body">ZOMATO</h1>
        <h2 className="cardTitle">Discover the best food & drinks in Nagpur</h2>
        <Sreach />
        <div className="renderFood">
            <FoodCard name="PIZZAA " price="299 /-" rating="5 . 0 ⭐⭐⭐⭐" size="S / M / L " image="https://b.zmtcdn.com/data/dish_photos/e76/88a36825bcceaf48a6bd10e8cc019e76.png" />
            <FoodCard name="BURGER" price="299 /-" rating="4 . 7 ⭐⭐⭐" size="S / M / L" image="https://b.zmtcdn.com/data/pictures/3/21557163/13e10265314f1f27a1a841488729b190_o2_featured_v2.jpg" />
            <FoodCard name="COFFEE" price="399 /-" rating="5 . 7 ⭐⭐⭐⭐" size="S / M / L" image="https://b.zmtcdn.com/data/dish_photos/acf/deb1e6a11ebef72789610a4400b9eacf.jpg" />
            <FoodCard name="SANDWICH" price="199 /-" rating="3 . 4 ⭐⭐⭐" size="S / M / L" image="https://b.zmtcdn.com/data/dish_photos/e31/fca1b27e7ae21dea935498e185fb7e31.jpg" />
        </div>
    </>
)

