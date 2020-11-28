<template>
    <h1>HOME</h1>
    <h2>state.common.count {{ countGetter }} {{ doubleCountGetter }}</h2>
    <h2>state.home.count {{ countHomeGetter }} {{ tripleCountHomeGetter }}</h2>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapMutations, mapActions } from 'vuex';

@Options({
    computed: {
        ...mapGetters('common', ['countGetter', 'doubleCountGetter']),
        ...mapGetters('home', ['countHomeGetter', 'tripleCountHomeGetter'])
    },
    methods: {
        ...mapMutations('common', ['incrementCountMutation']),
        ...mapMutations('home', ['incrementCountHomeMutation']),

        ...mapActions('common', ['incrementCountAsyncAction']),
        ...mapActions('home', ['incrementCountHomeAsyncAction'])
    },
})
export default class Home extends Vue {
    incrementCountMutation!: (a: object) => any;
    incrementCountAsyncAction!: (a: object) => any;
    incrementCountHomeMutation!: (a: object) => any;
    incrementCountHomeAsyncAction!: (a: object) => any;

    mounted() {
        this.incrementCountMutation({
            amount: 1
        });
        this.incrementCountAsyncAction({
            amount: 10
        });
        this.incrementCountHomeMutation({
            amount: 1
        });
        this.incrementCountHomeAsyncAction({
            amount: 100
        });
    }
}
</script>
