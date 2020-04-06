<template>
    <div class="commentBox">
        <div class="loading">
            <span>loading...</span>
            <div class="loadingBar"></div>
        </div>

        <div class="commentContents">
            <b>by {{ comments.user }}</b>
            <span> - {{ comments.time_ago }}</span>
            <h1>{{ comments.title }}</h1>
            <span v-html="comments.content" class="askContent"></span>

            <ol>
                <li v-for="item in commentContents" :key="item.id">
                    <span class="commUser">ID: <span>{{ item.user }}</span></span>
                    <span 
                        class="commentsText"
                        v-html="item.content"></span>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        comments() {
            return this.$store.state.commentList
        },
        commentContents() {
            return this.$store.state.commentList.comments
        }
    },
    created() {
        const commIdNum = this.$route.params.id
        this.$store.dispatch('FETCH_COMMENT', commIdNum)
    },
    mounted() { //beforeUpdate()    // script에서 onload일때와 같다고 생각하면 쉽다.
        let loading = document.querySelector('.loading');
        let routerView = document.querySelector('.commentContents');
        let loadingBar = document.querySelector('.loadingBar')
        
        requestAnimationFrame(function() {
            setTimeout(function() {
                loadingBar.style.width = '50%'
            }, 0)
        })

        setTimeout(function() {
            loading.style.display = 'none';
        }, 300)
    }
}
</script>

<style>
.commentBox{ position:relative; }
/* .commentBox > b{ padding-left:40px; }
.commentBox > h1{ padding-left:40px; } */
.commentBox  span.askContent > p{ padding:0 20px; }
.commentBox  span.askContent > p:last-child{ margin-bottom:40px;  }

.commentBox  ol{ border:3px solid #353434; position:relative; }
.commentBox  ol > li{ border-bottom:2px solid #353434; padding:10px 0; background:transparent; list-style:none; }
.commentBox  ol > li:last-child{ border-bottom:none; margin-bottom:0; }
.commentBox  ol > li > .commUser > span{ padding:2px 5px; background-color:rgba(53, 52, 52, .3); display:inline; }
.commentBox  ol > li > .commentsText{ padding:0 25px; }
</style>