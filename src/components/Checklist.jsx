import React, {useState} from 'react'

const Checklist = () => {
    const [items, setItems] = useState([
        {name: 'Item 1', image: 'item1.jpg', checked: false},
        {name: 'Item 2', image: 'item2.jpg', checked: false}
    ])

    const toggleCheck = (index) => {
        const updatedItems = [...items]
        updatedItems[index].checked = !updatedItems[index].checked
        setItems(updatedItems)
    }

    return (
        <div>
            <h2>Checklist</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={`./assets/${item.image}`} alt={item.name} />
                        <span>{item.name}</span>
                        <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(index)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Checklist