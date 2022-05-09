const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'LESSONS LIST',
            description: 'Please use "ADD TO CART" buttton to book a lesson!',
            mathsLesson: './Images/maths.png',
            button: 5,
            details: ['Subject: Math', 'Location: London', 'Price: £100'],
           
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
    }
})

