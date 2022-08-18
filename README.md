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

## 3. 와이어프레임과 프로젝트 시연 ##
### 회원가입 ###

![Untitled](https://user-images.githubusercontent.com/109029407/185391920-09d2fbc2-d3a9-4c7d-afd2-dd6766d69dec.png)

### 로그인 ###

![Untitled (1)](https://user-images.githubusercontent.com/109029407/185392067-efe33850-8049-4950-9fd6-59114750cf58.png)

### 메인페이지 ###

![Untitled (2)](https://user-images.githubusercontent.com/109029407/185392219-ff4a2750-e6d6-4cfe-9b13-2456415b7943.png)

### 퀴즈작성창 ###

![Untitled (3)](https://user-images.githubusercontent.com/109029407/185392382-166d8878-29e8-4b80-b650-77ab5ebad076.png)

### 상세페이지 ###

![Untitled (4)](https://user-images.githubusercontent.com/109029407/185392521-d2e12078-11fb-473b-9cd7-1241039de531.png)



## 4. ERD ##
![20questions](https://user-images.githubusercontent.com/109029407/185381276-bd0eea8b-29f6-4597-88ed-a12f5c01017a.png)



## 5. API 설계 ##
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
