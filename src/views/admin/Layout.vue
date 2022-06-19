<template lang="">
    <div class="flex dark:text-white">
        <Sidebar />
        <div class="flex-1 p-4">
            <HeaderDashboard />
            <router-view />
        </div>
        <SideMsg class="notif"/>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import SideMsg from '@/components/SideMsg.vue';
import HeaderDashboard from '@/components/HeaderDashboard.vue';
export default {
    name: 'AdminLayout',
    components: {
        Sidebar,
        HeaderDashboard,
        SideMsg
    }
}
</script>
<style scoped>
    .notif{
        
    }
</style>