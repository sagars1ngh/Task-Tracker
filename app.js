const app = Vue.createApp({
    data() {
        return {
            newItem: '',
            items: [],
        };
    },
    methods: {
        addItem() {
            if (this.newItem.trim() !== '') {
                this.items.push(this.newItem);
                this.newItem = '';
            }
        },
    },
});

app.mount('#app');
