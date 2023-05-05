<template>
  <header id="header">
    <div id="inner">
        <div id="logo">로고</div>
        <div id="menu">
          <ul>
            <li>
              <a href="">영화</a>
              <ul class="submenu">
                <li><a href="">현재상영작</a></li>
                <li><a href="">상영예정작</a></li>
              </ul>
            </li>
            <li>
              <a href="">예매</a>
              <ul class="submenu">
                <li><a href="">상영시간표</a></li>
                <li><a href="">예매하기</a></li>
                <li><a href="">예매현황</a></li>
              </ul>
            </li>
            <li>
              <a href="">문의</a>
              <ul class="submenu">
                <li><a href="">전체문의</a></li>
                <li><a href="">나의문의내역</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="member">
          <a href="">로그인</a>
          |
          <a href="">회원가입</a>
        </div>
    </div>
  </header>
  </template>

  <script>
  let submenu = document.querySelector(".sebmenu");


  export default{
    
  }
  </script>

  <style>
  #header{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    background-color: rgb(16, 16, 16);
  }

  #inner{
    width: 980px;
    max-width: 980px;
    margin: 0 auto;
    padding: 0;
    color: white;
    letter-spacing: -0.5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 80px;
  }

  #menu ul{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  #menu > ul > li{
    margin-right: 2em;
    margin-left: 2em;
    list-style: none;
  }

  #menu ul li a{
    text-decoration: none;
    color: white;
  }

  #member{
    margin-right: 30px;
  }

  #member a{ 
    text-decoration: none;
    color: white;
  }

  #logo{
    margin-left: 30px;
  }

  #menu .submenu a{
    letter-spacing: -0.5px;
    color: rgb(152, 152, 152);
  }

  #menu .submenu{
    display: none;
  }

  #menu ul li:hover > .submenu{
    display:flex;
    flex-direction: row;
    position: absolute;
    top:55px;
    width: 100%;
  }

  .submenu li{
    margin-left: -3em;
    margin-right: 4em;
    list-style: none;
  }
  
  </style>