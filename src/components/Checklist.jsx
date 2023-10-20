import React, {useState} from 'react'

const Checklist = () => {
    const [items, setItems] = useState([
        {name: 'Alaska', file: 'ak.png', checked: false},
        {name: 'Alabama', file: 'al.png', checked: false}
    ])

    const toggleCheck = (index) => {
        const updatedItems = [...items]
        updatedItems[index].checked = !updatedItems[index].checked
        setItems(updatedItems)
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img className="plate-img" src={`./public/plates/us/${item.file}`} alt={item.name} />
                        {/* <span>{item.name}</span> */}
                        <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(index)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Checklist