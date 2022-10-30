Vue.createApp({
    data(){
        return{
            enteredTask: '',
            tasks: [],
            show: true,
            btn: 'Hide'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
            this.enteredTask = '';
        },
        toggle(){
            this.show = !this.show;
            if(this.show){
                this.btn = 'Hide';
            } else {
                this.btn = 'Show';
            }
        }
    }
}).mount('#assignment');