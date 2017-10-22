export default {
    computed: {
        price_coin () {
            let price = this.product.price.toString()
            price = price.split('.')
            return price[0]
        },
        price_cents () {
            let price = this.product.price.toString()
            price = price.split('.')
            return `${price[1]}0`
        },
        price_installments () {
            const number = this.product.price / this.product.installments
            return number.toFixed(2)
        }
    }
}
