import MenuItem from "./MenuItem.jsx"
import data from "../data.js"
import { useState } from "react";
const MenuList = () => {
    const [gerechten, setGerechten] = useState(data)

    return (<section>
        {gerechten.map((gerecht) => (
            <MenuItem key={gerecht.id}img={gerecht.img} title={gerecht.title} price={gerecht.price} desc={gerecht.desc}/>
        ) )}
    </section>  );
}

export default MenuList;