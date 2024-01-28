import Item from "./Item"

const Items = ({ listItems }) => {

    let listItemCard = listItems.map((listItem, index) => {
        return <p key={index}>{listItem}</p>
    })

    return (
        <>
            <Item listItems={listItems} />
        </>
    )
} // end Items component

export default Items;