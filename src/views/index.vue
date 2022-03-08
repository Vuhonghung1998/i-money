<template>
    <div>
        <div class="m-6">Home Page</div>
        <div class="m-6" v-if="user">Hello {{user.displayName}}</div>
        <div class="m-6 text-red-500" v-else>Các con vợ Thụy Xuân đăng kí rồi hay vào sử dụng</div>
    </div>
</template>
<script>
import {useUser} from '../composables/useUser.js'
export default {
    setup() {
        const {getUser} = useUser();
        const {user} = getUser();
        return {user}
    },
}
</script>