import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// replaced by [categories]
// const categories = [
//     {
//         name: "commercial",
//         description: "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     {
//         name: "portraits",
//         description: "Portraits of people in my life"
//     },
//     {
//         name: "food",
//         description: "Delicious delicacies"
//     },
//     {
//         name: "landscape",
//         description: "Fields, farmhouses, waterfalls, and the beauty of nature"
//     },
// ]

// function categorySelected(name) {
//     console.log(`${name} clicked`)
// }

function Nav(props) {
    // lifted up to App.js
// const [currentCategory, setCurrentCategory] = useState(categories[0]);
// const [categories] = useState([
//     {
//         name: "commercial",
//         description: "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     {
//         name: "portraits",
//         description: "Portraits of people in my life"
//     },
//     {
//         name: "food",
//         description: "Delicious delicacies"
//     },
//     {
//         name: "landscape",
//         description: "Fields, farmhouses, waterfalls, and the beauty of nature"
//     },
// ])

    

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
    } = props; 

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    console.log(document.title)

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                    </span>{" "}
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    
                        {/* means if contactSelected is true, return navActive class */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            // As long as evaluation is true, the second bit of short circuit 'navActive' will be returned
                            currentCategory.name === category.name && !contactSelected && 'navActive' 
                            }`} 
                            // Note also that the navActive class value is assigned only if Contact hasn't been selected and the current category HAS been selected.
                            key={category.name}>
                            <span 
                                onClick={() => {
                                    setCurrentCategory(category)

                                    // set contactSelected to False
                                    setContactSelected(false)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
} 

export default Nav;