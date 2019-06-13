<template>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an exampe component.
                    </div>
                </div>
            </div>
        </div>
    </div> -->
     <div>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </div>

</template>

<script>
    export default {
        // mounted() {
        //     console.log('Component mounted.')
        // }
        data() {
            return {
                radio:1,
            }
        }
    }
</script>