<template>
    <h1>Logout page</h1>
</template>
<script>
import {useRouter} from 'vue-router';
import {useLogOut} from '../composables/useLogOut.js'
export default {
    setup() {
        const router = useRouter();
        const {error, logout} = useLogOut();

        async function onLogout() {
            await logout();
            if(!error.value) {
                router.push({name: 'Login', params: {}})
            }
        };
        onLogout();
        return {onLogout};
    },
}
</script>