// const Items = ({ listItems }) => {
//     const listItemCard = listItems.map((listItem, index) => {
//         return <p key={index}>{listItem}</p>
//     })

//     return (
//         listItemCard
//     )
// }
// export default Items

import Item from "./Item"

const Items = ({ listItems }) => {

    return (
        listItems.map((listItem, index) => {
            return <Item key={index} listItem={listItem} />
        })
    )
}
export default Items