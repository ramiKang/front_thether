import {createRouter,createWebHistory} from 'vue-router'

// 연결할 컴포넌트들
import Index from '../Index'
import QnaMain from '../components/qna/QnaMain'
// 라우터 설계
const routes=[
  {path:'/',component:Index},
  {path:'/qna',component:QnaMain}
]

// 라우터 생성
const router = createRouter({
  history:createWebHistory(),
  routes
});

//라우터 추출
export {router}

