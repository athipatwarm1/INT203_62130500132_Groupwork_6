const constraints = {
    name: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    job: {
        presence: true,
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    email: {
        presence: true,
        email: true
    }
}

var app =Vue.createApp({
    data() {
        return {
            formdata: {
                name: 'Athipat Pingwong',
                job: null,
                age: null,
                email: null,
                phone: null,
                image: './images/profile.png'
            },
            errors: null,
        }
    },
    methods: {
        checkForm(){
            console.log(this.formdata)
            this.errors = validate(this.formdata,
                                    constraints)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
})

app.mount('#app')