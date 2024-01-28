

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