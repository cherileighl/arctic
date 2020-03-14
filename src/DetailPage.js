import context from './context'

function DetailPage(props) {
    return (
        <div>{product.name}</div>

        <bs.Button variant="warning" onclick={e => {context.addToCart(product.id)}}>Purchase</bs.Button>
    )
}