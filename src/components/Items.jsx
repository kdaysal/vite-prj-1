
/*
const Items = ({ listItems }) => {

    return (
        <>
            <h2>List Items...</h2>
            <div>
                {listItems.map((listItem, index) => {
                    return <p key={index}>{listItem}</p>
                })}
            </div>
        </>
    )
} // end Items component

export default Items;
*/
//BEGIN CODE
const Items = ({ listItems }) => {

    let listItemCard = listItems.map((listItem, index) => {
        return <p key={index}>{listItem}</p>
    })

    return (
        <>
            <h2>List Items...</h2>
            <div>
                {listItemCard}
            </div>
        </>
    )
} // end Items component

export default Items;