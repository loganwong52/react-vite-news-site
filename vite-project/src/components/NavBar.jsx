function NavBar(props) {

    const { items } = props

    const HandleNavBarClick = (value) => {
        console.log(value)
    }

    return (
        <div>
            {items.map((item) => (
                // sending by reference: HandleNavBarClick
                // sending by reference with parameters: () => HandleNavBarClick(item.value)
                <a key={item.label} href='#' onClick={(() => HandleNavBarClick(item.value))} >{item.label}</a>
            ))}
        </div>
    )
}

export default NavBar;