const Items = ({ listItems }) => {
    const listItemCard = listItems.map((listItem, index) => {
        return <p key={index}>{listItem}</p>
    })

    return (
        listItemCard
    )
}
export default Items