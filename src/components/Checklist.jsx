import React, {useState} from 'react'

const Checklist = () => {
    const [items, setItems] = useState([{name: 'Alabama', abbr:  'al', checked: false}, {name: 'Alaska', abbr:  'ak', checked: false}, {name: 'Arizona', abbr:  'az', checked: false}, {name: 'Arkansas', abbr:  'ar', checked: false}, {name: 'California', abbr:  'ca', checked: false}, {name: 'Colorado', abbr:  'co', checked: false}, {name: 'Connecticut', abbr:  'ct', checked: false}, {name: 'Delaware', abbr:  'de', checked: false}, {name: 'District of Columbia', abbr:  'dc', checked: false}, {name: 'Florida', abbr:  'fl', checked: false}, {name: 'Georgia', abbr:  'ga', checked: false}, {name: 'Hawaii', abbr:  'hi', checked: false}, {name: 'Idaho', abbr:  'id', checked: false}, {name: 'Illinois', abbr:  'il', checked: false}, {name: 'Indiana', abbr:  'in', checked: false}, {name: 'Iowa', abbr:  'ia', checked: false}, {name: 'Kansas', abbr:  'ks', checked: false}, {name: 'Kentucky', abbr:  'ky', checked: false}, {name: 'Louisiana', abbr:  'la', checked: false}, {name: 'Maine', abbr:  'ma', checked: false}, {name: 'Maryland', abbr:  'md', checked: false}, {name: 'Massachusetts', abbr:  'ma', checked: false}, {name: 'Michigan', abbr:  'mi', checked: false}, {name: 'Minnesota', abbr:  'mn', checked: false}, {name: 'Mississippi', abbr:  'ms', checked: false}, {name: 'Missouri', abbr:  'mo', checked: false}, {name: 'Montana', abbr:  'mt', checked: false}, {name: 'Nebraska', abbr:  'ne', checked: false}, {name: 'Nevada', abbr:  'nv', checked: false}, {name: 'New Hampshire', abbr:  'nh', checked: false}, {name: 'New Jersey', abbr:  'nj', checked: false}, {name: 'New Mexico', abbr:  'nm', checked: false}, {name: 'New York', abbr:  'ny', checked: false}, {name: 'North Carolina', abbr:  'nc', checked: false}, {name: 'North Dakota', abbr:  'nd', checked: false}, {name: 'Ohio', abbr:  'oh', checked: false}, {name: 'Oklahoma', abbr:  'ok', checked: false}, {name: 'Oregon', abbr:  'or', checked: false}, {name: 'Pennsylvania', abbr:  'pa', checked: false}, {name: 'Rhode Island', abbr:  'ri', checked: false}, {name: 'South Carolina', abbr:  'sc', checked: false}, {name: 'South Dakota', abbr:  'sd', checked: false}, {name: 'Tennessee', abbr:  'tn', checked: false}, {name: 'Texas', abbr:  'tx', checked: false}, {name: 'Utah', abbr:  'ut', checked: false}, {name: 'Vermont', abbr:  'vt', checked: false}, {name: 'Virginia', abbr:  'va', checked: false}, {name: 'Washington', abbr:  'wa', checked: false}, {name: 'West Virginia', abbr:  'wv', checked: false}, {name: 'Wisconsin', abbr:  'wi', checked: false}, {name: 'Wyoming', abbr:  'wy', checked: false}])

    const toggleCheck = (index) => {
        console.log("Clicked index: " + index)
        const updatedItems = [...items]
        updatedItems[index].checked = !updatedItems[index].checked
        setItems(updatedItems)
    }

    // onload="checkPlates()"

    return (
        <div>
            <h1>iSpyway 1.0</h1>
            <div id="plate-grid">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" id={item.abbr} checked={item.checked} onChange={() => toggleCheck(index)} />
                        <label for={item.abbr}><img className="plate-img" src={`./plates/us/${item.abbr}.png`} alt={item.name} /></label>
                    </li>
                ))}
            </ul>
            </div>
            <div id="resetBtn">
                <button onclick="resetPlates()">Reset Plates</button>
            </div>
        </div>
    )
}

export default Checklist

// FROM MY HTML/JS VERSION:
// for (let key in stateCodes) {
//     // Create grid item container
//     const divNode = document.createElement("div");
//     divNode.setAttribute('class', 'grid-item');
//     divNode.setAttribute('id', stateCodes[key].code);

//     // Create buttons
//     const buttonNode = document.createElement("button");
//     buttonNode.setAttribute('class', 'plate');
//     buttonNode.setAttribute('onclick', 'registerPlate(this)');

//     // Create plate image for button
//     const imgNode = document.createElement("img");
//     imgNode.setAttribute('src', `images/plates/us/${stateCodes[key].code}.png`);

//     buttonNode.appendChild(imgNode);
//     divNode.appendChild(buttonNode);
//     document.getElementById("plate-grid").appendChild(divNode);

//     const checkmarkNode = document.createElement("img");
//     checkmarkNode.setAttribute('src', "images/icons/checkmark.png");
//     checkmarkNode.setAttribute('class', 'checkmark');
//     divNode.appendChild(checkmarkNode);
// }
