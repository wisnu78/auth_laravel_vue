<!--<template>-->
    <!--<div class="panel panel-default">-->
        <!--<div class="panel-heading">-->
            <!--<nav>-->
                <!--<ul class="list-inline">-->
                    <!--<li>-->
                        <!--<router-link :to="{ name: 'home' }">Home</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="!$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'login' }">Login</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="!$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'register' }">Register</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="$auth.check()" class="pull-right">-->
                        <!--<a href="#" @click.prevent="$auth.logout()">Logout</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</nav>-->
        <!--</div>-->
        <!--<div class="panel-body">-->
            <!--<router-view></router-view>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    // CoreUI Icons Set
    @import '~@coreui/icons/css/coreui-icons.min.css';
    /* Import Font Awesome Icons Set */
    $fa-font-path: '~font-awesome/fonts/';
    @import '~font-awesome/scss/font-awesome.scss';
    /* Import Simple Line Icons Set */
    $simple-line-font-path: '~simple-line-icons/fonts/';
    @import '~simple-line-icons/scss/simple-line-icons.scss';
    /* Import Flag Icons Set */
    @import '~flag-icon-css/css/flag-icon.min.css';
    /* Import Bootstrap Vue Styles */
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    // Import Main styles for this application
    @import 'assets/scss/style';
</style>
