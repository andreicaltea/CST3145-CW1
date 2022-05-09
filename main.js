const app = Vue.createApp({
    data() {
        return {
            product: 'LESSONS LIST',
            description: 'Please use "ADD TO CART" buttton to book a lesson!',
            image: './Images/english.png',
            inventory: 5,
            details: ['Subject: Math', 'Location: London', 'Price: £100'],
        }
    }
})

