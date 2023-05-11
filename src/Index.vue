<template>
  <div class="box-office">
    <div class="sub-title">박스오피스</div>
      <div class="main-movie">
        <!--영화 정보 top3까지 가지고 와서 작성-->
        <div class="ranking-movie" v-for="(movie,i) in movieList" :key="i" style="colo
        white">
          {{ movie.info }}
          {{ movie.movie.name }}
          <a href="#">
            <img src="./assets/sample/poster/john.jpg"/>
            <div class="ranking-num">
            </div>
            <div class="hover-movie">
              <div class="summary"></div>
              <div class="booking-btn-area">
                <button class="booking-btn">
                  예매하기
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="screening">
      <div class="sub-title">오늘의 상영시간표</div>
      <div class="screening-content">
        <div class="today"><h2>2023.05.22</h2></div>
        <div class="schedule-list">
          <div class="schedule" >
            <h3>
              <span>
                <i class="grade-12"></i>
                강하람의 문단속
              </span>
            </h3>
            <div class="schedule-article">
              <ul>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>18:00</span>~22:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
              
              </ul>
            </div>
          </div>

          <div class="schedule" >
            <h3>
              <span>
                <i class="grade-19"></i>
                강하람의 집단속
              </span>
            </h3>
            <div class="schedule-article">
              <ul>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>18:00</span>~22:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>3관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>15:00</span>~27:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>67</span>/120석
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="schedule" >
            <h3>
              <span>
                <i class="grade-all"></i>
                강하람의 문단속
              </span>
            </h3>
            <div class="schedule-article">
              <ul>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>18:00</span>~22:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>09:00</span>~11:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>3관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>15:00</span>~27:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>67</span>/120석
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="schedule" >
            <h3>
              <span>
                <i class="grade-15"></i>
                강하람의 집단속
              </span>
            </h3>
            <div class="schedule-article">
              <ul>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>18:00</span>~22:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>4관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>09:00</span>~11:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>113</span>/114석
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="schedule-btn" >
                    <div class="theater">
                      <h4>3관/2D</h4>
                    </div>
                    <div class="time">
                      <p>
                      <span>15:00</span>~27:00
                      </p>
                    </div>
                    <div class="length">
                      <p>
                        <span>67</span>/120석
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue'

export default{
  name:"Index",
  data:()=>{
      return{
        movieList:[],
      }
  },
  mounted(){
    axios.get("http://localhost:8000/api/v1/movie-info")
      .then(response=>{
        if(response.status === 200){
          this.movieList=response.data;
        }
      })
      .catch(response=>{
        console.log(response)
      });
  }
}

</script>

<style>
@import "./assets/css/index.css";
</style>