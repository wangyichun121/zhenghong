<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-body">
                    <div class='game-area'>
                        <div class="game-name">Memory Card</div>
                        <div class="left-pairs">Paris Left To Match</div>
                        <div class="left-pairs">Highest Speed</div>
                        <div class="card-area"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
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

<style scoped>

.card-body {
    overflow:hidden;
}
    .game-area {
        margin:auto auto;
        width:450px;
        height: 670px;
        border: 4px solid #BCBCBC;
        margin-top:50px;
        padding-left:10px;
        padding-right:10px;
        padding-top:10px;
        /* float: left; */
        text-align: center;
        border-radius: 3px;
        background: #F9F7EE;
    }
    .game-name {
        font-size:28px;
        font-weight:900;
        color:#d0d0d0;
        width:160px;
        height: 100px;
        background: #5979AB;
        border-radius: 3px;
        text-align: center;
        float: left;
    }
    .left-pairs {
        font-size:24px;
        color:#E9DFD1;
        line-height: 26px;
        width:120px;
        height: 100px;
        background: #BAAC9F;
        border-radius: 3px;
        float: left;
        text-align: center;
        margin-left:10px;
        padding-top:10px;
    }
    .card-area {
        width: 100%;
        height: 510px;
        /* border: 1px solid #d0d0d0; */
        float: left;
        border-radius: 3px;
        margin-top:20px;
        background: #FEFEFE;
    }
</style>