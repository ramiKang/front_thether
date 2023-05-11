<template>
  <footer id="footer">
    <div id="footer-wrap">
    <h4>영화 예매 시스템 토이프로젝트[2023.04.10 - 2023.05.10]</h4>
    <p>
      <b>안재현(BackEnd)</b>
      <span>&nbsp;&nbsp;&nbsp;<a href="">GITHUB</a>&nbsp;&nbsp;&nbsp;ddd418@naver.com</span>
      <span style="margin: 1em;">|</span>
      <b>강하람(FrontEnd)</b>
      <span>&nbsp;&nbsp;&nbsp;<a href="">GITHUB</a>&nbsp;&nbsp;&nbsp;harami0007@naver.com</span>
    </p>
  </div>
  </footer>
  </template>

  <script>
  export default{

  }
  </script>

  <style>
  #footer-wrap{
    width:980px;
    max-width: 980px;
    margin:0 auto;
  }
  #footer{
  
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 5em;
    background-color: rgb(16, 16, 16);

    color: rgb(117, 117, 117);

    line-height: 10px;

    padding: 0px 20px;
  }

  #footer p span a{
    text-decoration: none;
    color: rgb(117, 117, 117);
  }

  .empty{
    width:2em;
    background-color: white;
    display: inline-block;
  }
  </style>