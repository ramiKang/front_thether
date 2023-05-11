import {createRouter,createWebHistory} from 'vue-router'

// 연결할 컴포넌트들
import Index from '../Index'
import QnaMain from '../components/qna/QnaMain'
import QnaInsert from '../components/qna/QnaInsert'
import MovieMain from '../components/movie/MovieMain'
// 라우터 설계
const routes=[
  {path:'/',component:Index},
  {path:'/movie',component:MovieMain},
  {path:'/qna/insert',component:QnaInsert},
  {path:'/qna',component:QnaMain}
]

// 라우터 생성
const router = createRouter({
  history:createWebHistory(),
  routes
});

//라우터 추출
export {router}

