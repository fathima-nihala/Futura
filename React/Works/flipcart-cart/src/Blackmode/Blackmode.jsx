import React, { useContext, useState } from 'react'
// import { IoMoonOutline } from "react-icons/io5";
// import { CiSun } from "react-icons/ci";
import './back.css'
// import { ThemeContext } from './ThemeProvider';

const Blackmode = () => {

    // const { toggle, toggleTheme } = useContext(ThemeContext);

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }
    return (
        // <div className={toggle ? "app dark-mode" : "app"}>
        //     <div className="level">
        //         <div>
        //             <h1 className="title">Dark Mode Challenge</h1>
        //         </div>

        //         {/* --The button that should toggle dark mode-- */}
        //         <button
        //             className="app__dark-mode-btn icon level-right"
        //             onClick={() => toggleTheme(!toggle)}
        //         >

        //                {toggle ? <CiSun style={{ width: 80 ,color:'#FFA500'}} /> : <IoMoonOutline style={{ width: 80 }}/>}

        //         </button> 
        //     </div>

        //     <div className="columns">
        //         <div className="column">
        //             <p>
        //                 Lollipop powder powder. Cotton candy caramels chupa chups halvah
        //                 muffin caramels apple pie topping cake. Topping chocolate bar pastry
        //                 chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
        //                 plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
        //                 pie pudding caramels wafer tart tootsie roll macaroon. Croissant
        //                 tiramisu chocolate bar carrot cake lemon drops halvah.
        //             </p>
        //         </div>
        //         <div className="column">
        //             <p>
        //                 Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
        //                 tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
        //                 marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
        //                 Pudding sugar plum chocolate cake cake biscuit pastry pastry
        //                 chocolate bar tart. Lemon drops dessert gummies icing.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="field">
        //         <div className="control">
        //             <input className="input" type="text" placeholder="Name" />
        //         </div>
        //     </div>

        //     <div className="field">
        //         <div className="control">
        //             <input className="input" type="text" placeholder="Email" />
        //         </div>
        //     </div>

        //     <section className="section">
        //         <div className="buttons level-right">
        //             <a className="button is-primary">Save</a>
        //             <a className="button is-link">Submit</a>
        //         </div>
        //     </section>
        // </div>
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <h1>Welcome to my website!</h1>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}

export default Blackmode