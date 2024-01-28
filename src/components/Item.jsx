import Items from "./Items"

const Item = ({ listItems }) => {
    const listItemCard = listItems.map((listItem, index) => {
        return <p key={index}>{listItem}</p>
    })

    return (
        listItemCard
    )
}
export default Item