<template>
    <h1>HOME</h1>
    <h2>state.common.count {{ countGetter }} {{ doubleCountGetter }}</h2>
    <h2>state.home.count {{ countHomeGetter }} {{ tripleCountHomeGetter }}</h2>
    <div class="scrollmenu">
        <div @click="onLinkClick('A')">AAAAAAAAAAAAAAA</div>
        <div @click="onLinkClick('B')">BBBBBBBBBBBBBBB</div>
        <div @click="onLinkClick('C')">CCCCCCCCCCCCCCC</div>
        <div @click="onLinkClick('D')">DDDDDDDDDDDDDDD</div>
        <div @click="onLinkClick('E')">EEEEEEEEEEEEEEE</div>
        <div @click="onLinkClick('F')">FFFFFFFFFFFFFFF</div>
        <div @click="onLinkClick('G')">GGGGGGGGGGGGGGG</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { useRouter } from 'vue-router';
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
    }
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

    router = useRouter();

    onLinkClick(arg: string) {
        this.router.replace('home/' + arg);
    }
}
</script>

<style scoped>
div.scrollmenu {
    background-color: #333;
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu div {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px;
    text-decoration: none;
}

div.scrollmenu div:hover {
    background-color: #777;
}
</style>