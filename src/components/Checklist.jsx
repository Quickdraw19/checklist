import React, {useState} from 'react'

const Checklist = () => {
    const [items, setItems] = useState([{name: 'Alabama', file: 'al.png', checked: false}, {name: 'Alaska', file: 'ak.png', checked: false}, {name: 'Arizona', file: 'az.png', checked: false}, {name: 'Arkansas', file: 'ar.png', checked: false}, {name: 'California', file: 'ca.png', checked: false}, {name: 'Colorado', file: 'co.png', checked: false}, {name: 'Connecticut', file: 'ct.png', checked: false}, {name: 'Delaware', file: 'de.png', checked: false}, {name: 'District of Columbia', file: 'dc.png', checked: false}, {name: 'Florida', file: 'fl.png', checked: false}, {name: 'Georgia', file: 'ga.png', checked: false}, {name: 'Hawaii', file: 'hi.png', checked: false}, {name: 'Idaho', file: 'id.png', checked: false}, {name: 'Illinois', file: 'il.png', checked: false}, {name: 'Indiana', file: 'in.png', checked: false}, {name: 'Iowa', file: 'ia.png', checked: false}, {name: 'Kansas', file: 'ks.png', checked: false}, {name: 'Kentucky', file: 'ky.png', checked: false}, {name: 'Louisiana', file: 'la.png', checked: false}, {name: 'Maine', file: 'ma.png', checked: false}, {name: 'Maryland', file: 'md.png', checked: false}, {name: 'Massachusetts', file: 'ma.png', checked: false}, {name: 'Michigan', file: 'mi.png', checked: false}, {name: 'Minnesota', file: 'mn.png', checked: false}, {name: 'Mississippi', file: 'ms.png', checked: false}, {name: 'Missouri', file: 'mo.png', checked: false}, {name: 'Montana', file: 'mt.png', checked: false}, {name: 'Nebraska', file: 'ne.png', checked: false}, {name: 'Nevada', file: 'nv.png', checked: false}, {name: 'New Hampshire', file: 'nh.png', checked: false}, {name: 'New Jersey', file: 'nj.png', checked: false}, {name: 'New Mexico', file: 'nm.png', checked: false}, {name: 'New York', file: 'ny.png', checked: false}, {name: 'North Carolina', file: 'nc.png', checked: false}, {name: 'North Dakota', file: 'nd.png', checked: false}, {name: 'Ohio', file: 'oh.png', checked: false}, {name: 'Oklahoma', file: 'ok.png', checked: false}, {name: 'Oregon', file: 'or.png', checked: false}, {name: 'Pennsylvania', file: 'pa.png', checked: false}, {name: 'Rhode Island', file: 'ri.png', checked: false}, {name: 'South Carolina', file: 'sc.png', checked: false}, {name: 'South Dakota', file: 'sd.png', checked: false}, {name: 'Tennessee', file: 'tn.png', checked: false}, {name: 'Texas', file: 'tx.png', checked: false}, {name: 'Utah', file: 'ut.png', checked: false}, {name: 'Vermont', file: 'vt.png', checked: false}, {name: 'Virginia', file: 'va.png', checked: false}, {name: 'Washington', file: 'wa.png', checked: false}, {name: 'West Virginia', file: 'wv.png', checked: false}, {name: 'Wisconsin', file: 'wi.png', checked: false}, {name: 'Wyoming', file: 'wy.png', checked: false}])

    const toggleCheck = (index) => {
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
                        <img className="plate-img" src={`./plates/us/${item.file}`} alt={item.name} />
                        {/* <span>{item.name}</span> */}
                        <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(index)} />
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
