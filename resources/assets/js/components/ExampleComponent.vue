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
                        <div class="card-area">
                            <div>
                                <span><img :src="imgurl_1" /></span>
                                <span><img :src="imgurl_9" /></span>
                                <span><img :src="imgurl_10" /></span>
                                <span><img :src="imgurl_4" /></span>
                            </div>
                            <div>
                                <span><img :src="imgurl_5" /></span>
                                <span><img :src="imgurl_6" /></span>
                                <span><img :src="imgurl_7" /></span>
                                <span><img :src="imgurl_8" /></span>
                            </div>
                            <div>
                                <span><img :src="imgurl_1" /></span>
                                <span><img :src="imgurl_9" /></span>
                                <span><img :src="imgurl_10" /></span>
                                <span><img :src="imgurl_4" /></span>
                            </div>
                             <div>
                                <span><img :src="imgurl_5" /></span>
                                <span><img :src="imgurl_6" /></span>
                                <span><img :src="imgurl_7" /></span>
                                <span><img :src="imgurl_8" /></span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgurl_1:'/static/img/8-ball.png',
                // imgurl_2:'/static/img/1561704783(1).jpg',
                // imgurl_3:'/static/img/back.png',
                imgurl_4:'/static/img/baked-potato.png',
                imgurl_5:'/static/img/dinosaur.png',
                imgurl_6:'/static/img/kronos.png',
                imgurl_7:'/static/img/rocket.png',
                imgurl_8:'/static/img/skinny-unicorn.png',
                imgurl_9:'/static/img/that-guy.png',
                imgurl_10:'/static/img/zeppelin.png',
                radio:1,
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
img {
    width: 24%;

}



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
        padding-top:10px;
        line-height: 30px
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
        float: left;
        border-radius: 3px;
        margin-top:20px;
        background: #FEFEFE;
        padding-top:10px;
    }
</style>