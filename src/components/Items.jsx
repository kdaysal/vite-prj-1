import Item from "./Item"

const Items = ({ listItems }) => {

    return (
        listItems.map((listItem, index) => {
            return <Item key={index} listItem={listItem} />
        })
    )
}
export default Items