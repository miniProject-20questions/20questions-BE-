# 20questions-BE-
## 1. 프로젝트 설명 ##
- 프로젝트 이름 : 스무고개(20-Questions)
- 프로젝트 설명 : 스무고개 게임을 웹으로 구현

## 2. 프로젝트 진행 ##
- **프로젝트 기간 : 2022. 8. 12. ~ 8. 18.(7일)**
- **8/12(금)**
    - S.A 작성
    - 와이어프레임 작성
    - API 설계
    - API 기능 분담
    - Git repo 생성
- **8/13(토) ~ 8/15(월)**
    - FE/BE 파트별 구현 및 취합
- **8/16(화) ~8/17(수)**
    - FE/BE 서버 배포
    - FE/BE 서버 연결
    - 추가기능 구현
- **8/18(목)**
    - 발표영상 촬영
    - 프로젝트 테스트 및 수정사항 보완
    - 트러블슈팅 정리

## 3. 와이어프레임 ##
### 회원가입 ###

![Untitled](https://user-images.githubusercontent.com/109029407/185391920-09d2fbc2-d3a9-4c7d-afd2-dd6766d69dec.png)

---
### 로그인 ###

![Untitled (1)](https://user-images.githubusercontent.com/109029407/185392067-efe33850-8049-4950-9fd6-59114750cf58.png)

---
### 메인페이지 ###

![Untitled (2)](https://user-images.githubusercontent.com/109029407/185392219-ff4a2750-e6d6-4cfe-9b13-2456415b7943.png)

---
### 퀴즈작성창 ###

![Untitled (3)](https://user-images.githubusercontent.com/109029407/185392382-166d8878-29e8-4b80-b650-77ab5ebad076.png)

---
### 상세페이지 ###

![Untitled (4)](https://user-images.githubusercontent.com/109029407/185392521-d2e12078-11fb-473b-9cd7-1241039de531.png)

## 4. 프로젝트 시연 ##
### 프로젝트 시연영상 ###
https://www.youtube.com/watch?v=GysNXMKo6mA

### 회원가입 ###

![KakaoTalk_20220818_211812103](https://user-images.githubusercontent.com/109029407/185394700-bdf332c4-7cec-4503-8223-6e9de5ab1d0a.png)

---
### 로그인 ###

![KakaoTalk_20220818_211811953](https://user-images.githubusercontent.com/109029407/185394739-719713af-387e-4aea-b301-721775302c2c.png)

---
### 메인페이지 ###
* 전체퀴즈 조회
![KakaoTalk_20220818_214002856](https://user-images.githubusercontent.com/109029407/185397609-da31d62f-157b-4373-ad96-d27a3738f808.png)


* 카테고리별 조회
![KakaoTalk_20220818_211812251](https://user-images.githubusercontent.com/109029407/185394866-8672dd52-2c21-4dc0-932a-d3368c734bb7.png)

---
### 퀴즈작성창 ###

![KakaoTalk_20220818_214002684](https://user-images.githubusercontent.com/109029407/185397022-f22671ee-f754-4983-ae80-bee99e05f0e0.png)

---
### 상세페이지 ###
* 질문자 페이지
![KakaoTalk_20220818_211634906](https://user-images.githubusercontent.com/109029407/185396274-1b3ca112-19fe-4864-932a-8cfe677a42d3.png)

* 출제자 페이지
![KakaoTalk_20220818_211812398](https://user-images.githubusercontent.com/109029407/185397162-a28222c9-5240-466e-8ed3-a491b8574f05.png)

* 정답처리로 종료된 퀴즈
![KakaoTalk_20220818_211718173](https://user-images.githubusercontent.com/109029407/185397185-1e305c95-f7f3-48d7-bc51-bfddcd0cc1dd.png)




## 5. ERD ##
![20questions](https://user-images.githubusercontent.com/109029407/185381276-bd0eea8b-29f6-4597-88ed-a12f5c01017a.png)



## 6. API 설계 ##
### 회원가입/로그인 ###
|기능|method|URL(service)|API URL|request|response|담당자|
|------|---|---|---|---|---|---|
|아이디 중복체크|POST|/|/api/auth/idCheck|{"id" : "Sumin"}|{"message": "SUCCESS"}|F:조영은/ B:최성영|
|회원가입|POST|/user|/api/auth/signup|{"id" : "Sumin", "nickname" : "수민", "password" : "1234", "confirm": "1234"}|{"message": "SUCCESS"}|F:조영은/ B:최성영|
|로그인|POST|/user|/api/auth/signin|{"id" : "Sumin", "password" : "1234"}|{"message": "SUCCESS", "token": "abcdefg"}|F:조영은/ B:최성영|

### 메인페이지(퀴즈) ###
|기능|method|URL(service)|API URL|request|response|담당자|
|------|---|---|---|---|---|---|
|메인페이지(퀴즈등록)|POST|/|/api/quiz|{"title":"뭘까요?", "category": 1, "answer" : "판다"}|{"message": "SUCCESS"}|F:채종원/ B:신용의|
|메인페이지(퀴즈조회)|GET|/|/api/quiz|-|{"result": [{"nickname": "수민", "quizId": 1, "title":"뭘까요?", "count" : 7, "category": 1, "createdAt" : SAT-13-08-2022}, {"nickname": "민수", "quizId": 2, "title":"뭐게요?", "count" : 13, "category": 3, "createdAt" : SAT-13-08-2022}]} |F:채종원/ B:신용의|

### 상세페이지(질문) ###
|기능|method|URL(service)|API URL|request|response|담당자|
|------|---|---|---|---|---|---|
|상세페이지(카테고리수정)|PATCH|/detail/:quizId|/api/quiz/:quizId|{”category”: 7}|{”message”: “SUCCESS”}|F:채종원/ B:신용의|
|상세페이지(퀴즈상세조회)|GET|/detail/:quizId|/api/quiz/:quizId||{"nickname": "민수", "title":"뭘까요?", "count" : 13, "category": 1, "createdAt" : SAT-13-08-2022, "quest": True}|F:조영은/ B:신용의|
|상세페이지(퀴즈삭제)|DELETE|/detail/:quizId|/api/quiz/:quizId||{”message”: “SUCCESS”}|F:조영은/ B:신용의|
|상세페이지(질문등록)|POST|/detail/:quizId|/api/question/:quizId|{"content":"다섯 글자인가요?"}|{”message”: “SUCCESS”}|F:채종원/ B:황수민|
|상세페이지(질문조회)|GET|/detail/:quizId|/api/question/:quizId||{"data": [{"quizId": 1, “questionId”: 2, "content":"다섯 글자인가요?", "solved": TRUE, ”answer”: “판다”}, {"quizId": 1, “questionId”: 2, "content":"지금도 사용되나요?", "solved": FALSE, ”answer”: “판다”}]}|F:채종원/ B:황수민|
|상세페이지(질문체크)|PATCH|/detail/:quizId|/api/question/:quizId/:questionId|{"solved" : FALSE }|{”message”: “SUCCESS”}|F:채종원/ B:황수민|

## 7. 트러블 슈팅(Trouble Shooting) ##
### FrontEnd ###
1. form 안에 있는 취소 버튼을 누를 때 제출로 인식되어 내용이 제출되는 에러 - 취소버튼에 type을 부여하여 해결
2. 삼항 연산자로 조건 부여시 다음 조건으로 넘어감 - if 문으로 수정 후 해결
3. 포스팅 폼 제출 후 새로고침을 유도하였는데 Link 태그와 navigate로는 같은 url로의 이동이 지원되지 않음 - window.location.replace("/"); 사용
4. 오류 상황 : 로그인 이후 첫 게시글 작성 시 회원이 아니라는 조건으로 게시글 작성 차단 문제
문제 파악 : 로그인이후 토큰인증이 되었으니 메인으로 이동해도 토큰사용이 가능할 줄 알았으나
각 컴포넌트에서 axios 요청을 할 때 header에 담아 인증을 하기때문에 메인 이동 후 게시글 작성 사이에는
토큰이 없는(=회원이 아닌) 상태로 게시글이 작성되었기에 첫번째 게시글이 반영되지 않았다.
오류 해결 : 로그인에서 메인 페이지로 이동할 때 window.location.replace를 이용하여 메인 페이지로 이동하면
컴포넌트를 불러오면서 토큰을 확인할 수 있고 확인된 토큰값으로 게시글 작성이 가능하였다.
다른 해결 방법으로는 로컬 스토리지가 아닌 로고가 들어있는 고정된 header 부분에 토큰값을 넣어주어 각 컴포넌트들의 이동이 있어도
header에서 오는 값으로 비교하여 접근을 제어하는 방법을 볼 수 있었다.
5. 오류 사항 : input요소에서 e.tatget.value를 받아오면서 바로 아이디조건과 비밀번호 일치 여부를 확인 중 문제 발생
오류 해결 : 값 변경과 값 비교를 따로 분리하여 구현 > 값이 각 조건에 따라 정상 작동하였다.

### BackEnd ###
1. 클라이언트에게 보여줄 에러메세지 송신주체(FE/BE) 문제
  : BE에서 보내는 에러메세지도 클라이언트에게 보낼 수 있지만 FE에서 validation해야하므로 비효율적.
    따라서 BE response 메세지를 단순화하여 보내고 FE에서 클라이언트에게 보낼 메세지를 재설정하는 방식 채택.
    (request 성공 시  response SUCCESS / request 실패 시 response 에러 status code와 단순화한 영문 에러메세지) 
    (BE 에러메세지 정리문서 : https://github.com/miniProject-20questions/20questions-BE-/blob/submain/errorMessage.md)

2. DB에서 생기는 에러 캐치처리를 담당할 레이어드 아키텍처 계층 문제(Service계층/Repository계층) 
  : Service계층에서 에러 캐치는 Repository계층에서 에러 레이즈 한 것을 캐치하기 때문에 어디서 에러처리를 하든 레벨 차이일 뿐 DB 에러 캐치는 가능함.
    (레이즈는 에러를 던져서 호출->호출->호출한 상위 함수로 계속 올리는 과정)
    하지만 의미적으로 보면 DB를 담당하는 Repository계층에서 에러처리하는 것이 맞음. 
    Service계층에서 에러 캐치에 DB 에러처리를 하면 DB 에러가 아닌 것들도 통틀어 DB에러로 잡기 때문에 모호해질 수 있음.
    DB 에러의 범위를 좀더 명확하게, 좁게 하기 위하여 모든 API는 Repository 단계에서 DB 에러 캐치처리 구현함.

3. Sequelize Include 사용시 관계 설정 및 데이터 import 문제
: 한 테이블을 이용해서 다른 테이블의 데이터를 참조하여 들고 오려고 할 시에 모델에서 관계 설정을 해줘야 했음. 
  1:N, N:1로 설정을 해준 후에 include를 통해 한개의 테이블을 통해 두개 이상의 테이블을 참조하여 데이터를 선별적으로 가져와야 했음
  관계 설정을 associate를 나누어서 각각 정의를 해줬을 시, 두개 이상의 테이블을 동시에 불러오려고 했을때 한 테이블은 연결이 되지 않는 현상을 보임.
  associate를 두 번 정의하면 앞에서 정의한 관계설정을 덮어쓰기 때문에, 한 associate 아래에서 두개의 관계를 설정해준 후에야 둘 다 동시에 참조가 가능했음.
  데이터를 불러 왔을 때도 굉장히 긴 객체로 데이터를 넘겨 줬는데, sequelize의 내장 함수(raw:true)를 통해서 애초에 데이터 참조 결과를 간단하게 나타나게 할 수 있었음.
  참조한 테이블은 객체와 배열로 데이터가 들어와 읽는 방식을 달리 해줘야, 값을 불러올 수 있었음.
  (참고 : https://stackoverflow.com/questions/45501856/associate-different-models-using-sequelize )
