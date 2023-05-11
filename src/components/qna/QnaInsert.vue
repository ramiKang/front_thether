<template>
  <div class="qna-section">
  <div class="title-area">
    <h1>QnA</h1>
    <div class="notice">문의주시면 정성을 답해 답변하겠습니다:)</div>
  </div>
  <form>
  <div class="content-area">
    <div class="qna-item">
      <div class="qna-question">제목</div>
      <div class="qna-answer">
        <input type="text" class="input-text" placeholder="제목을 입력해주세요">
      </div>
    </div>
    <div class="qna-item">
      <div class="qna-question">내용</div>
      <div class="qna-answer" id="qna-textarea">
        <textarea
          v-model="qnaContent"
          class="input-text" 
          maxlength="1500"  
          placeholder="문의내용을 적어주세요"
          ></textarea>
        <p class="text-count">{{ textCount }}/1500</p>
        <div style="color:white"></div>
      </div>
    </div>
    <div class="qna-item">
      <div class="qna-question">공개여부</div>
      <div class="qna-answer">
        <input type="radio" v-model="qnaPublic" class="toggle-radio toggle-left" id="public" name="public" value="true" checked>
        <label for="public" class="public-btn">공개</label>
        <input type="radio" v-model="qnaPublic" class="toggle-radio toggle-right" id="non-public" name="public" value="false" >
        <label for="non-public" class="public-btn">비공개</label>
      </div>
    </div>
    <div class="qna-item" v-show="qnaPublic == 'false'">
      <div class="qna-question">비밀번호</div>
      <div class="qna-answer">
        <input type="password" class="input-text password" placeholder="비밀번호를 입력해주세요">
      </div>
    </div>
  </div>

  <div class="btn-area">
    <button type="submit" class="btn">등록</button>
    <button type="button" class="btn">목록</button>
  </div>
</form>
</div>
</template>

  <script>
  export default{
    data(){
      return{
        qnaContent:'',
        qnaPublic:'',
      };
    },
    computed:{
      textCount(){
        return this.qnaContent.length;
      },
    }
  }
</script>

  <style>
.btn-area{
  width:800px;
  text-align: right;
}

.btn{
  width: 80px;
  height: 2em;
  line-height: 2em;
  margin-left: 10px;
  background-color: transparent;
  color:white;
  border: 1px solid white;
  cursor: pointer;
}



  .text-count{
    color: white;
    width: 100%;
    text-align: right;
    font-size: 10px;
    line-height: 10px;
    margin: 0;
  }

  .input-text{
    height: 2.5em;
    background-color: transparent;
    border: 1px solid;
    border-color: darkgray darkgray;
    width: 100%;
    border-radius: 5px;
    color: white;
    padding-left:10px
  }


  textarea.input-text{
    min-height: 10em;
    padding-top:10px
  } 

  .public-btn{
    border: 3px solid darkgray;
    display: inline-block;
    position: relative;
    text-align: center;
    transition: background 600ms ease,color 600ms ease;
  }

  .toggle-radio{
    display: none;
  }

  input[type="radio"].toggle-radio + label{
    cursor:pointer;
    min-width: 80px;
    height: 2.5em;
    line-height: 2em;
    font-size:13px;
  }

  input[type="radio"].toggle-radio + label:hover{
    background: none;
    color: white;
  }

  input[type="radio"].toggle-radio + label:after{
    background: white;
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
    z-index: -1;
    
  }

  input[type="radio"].toggle-left + label{
    border-right: 0;
  }

  input[type="radio"].toggle-left + label:after{
    left: 100%;
  }

  input[type="radio"].toggle-right + label{
    margin-left: -5px;
  }

  input[type="radio"].toggle-right + label:after{
    left: -100%;
  }

  input[type="radio"].toggle-radio:checked + label{
    cursor:default;
    color:black;
    background-color: darkgray;
    transition: color 200ms;
  }

  input[type="radio"].toggle-radio:checked + label:after{
    left:0;
  }


  .qna-section .content-area{
    margin: 20px 0px;
    width: 100%;

    display: flex;
    flex-direction: column;
    
  }

  .qna-section .content-area .qna-item{
    display: flex;
    flex-direction: row;
    margin: 15px 0px;
    min-height: 3em;
    line-height: 3em;

    align-items: center;
  }

  .qna-section .content-area .qna-item .qna-question{
    width:200px;
    text-align: center;
    font-weight: bold;
    color:rgb(192, 192, 192);
  }

  .qna-section .content-area .qna-item .qna-answer{
    width:600px
  }

  

  .qna-section{
    color:white;
    width: 100%;
    min-height: 700px;
    background-color: rgb(15, 15, 15);
    padding: 20px 20px;
  }

  /*
  .title-area{
    border-bottom: 3px solid white;
  }

  .title-area h1{
    font-size: 3em;
    margin: 20px 0px;
  }

  .title-area .notice{
    color: rgb(208, 208, 208);
    font-size: 1.3em;
    margin: 20px 0px;
  }
  */
  </style>