import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 컴포넌트(인스턴스) 옵션
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log("fetched");
                    bus.$emit('end:spinner');
                })
                .catch(error => console.log(error));
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}