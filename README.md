# 20questions-BE-
## 1.ERD ##
![20questions](https://user-images.githubusercontent.com/109029407/184495903-d80c7adf-0f76-4ced-b4ea-5d982199341b.png)

---
## 2. API 설계 ##

|기능|method|URL(service)|API URL|request|response|담당자|
|------|---|---|---|---|---|---|
|회원가입|POST|/|/api/auth/signup|{"id" : "Sumin", "nickname" : "수민", "password" : "1234", "confirm": "1234"}|{"message": "회원가입을 축하드립니다!"}|F:조영은/ B:최성영|
|로그인|POST|/|/api/auth/signin|{"id" : "Sumin", "password" : "1234"}|{"message": "수민님, 환영합니다!"}|F:조영은/ B:최성영|
|메인페이지(퀴즈등록)|POST|/|/api/quiz|{"title":"뭘까요?", "category": 1, "answer" : "판다"}|{"message": "퀴즈가 등록되었습니다."}|F:채종원/ B:신용의|
|메인페이지(퀴즈조회)|GET|/|/api/quiz|-|{"data": [{"nickname": "수민", "quizId": 1, "title":"뭘까요?", "count" : 7, "category": 1, "createdAt" : SAT-13-08-2022}, {"nickname": "민수", "quizId": 2, "title":"뭐게요?", "count" : 13, "category": 3, "createdAt" : SAT-13-08-2022}]} |F:채종원/ B:신용의|
|상세페이지(퀴즈상세조회)|GET|/detail/:quizId|/api/quiz/:quizId||{"nickname": "민수", "title":"뭘까요?", "count" : 13, "category": 1, "createdAt" : SAT-13-08-2022}|F:조영은/ B:신용의|
|상세페이지(퀴즈삭제)|DELETE|/detail/:quizId|/api/quiz/:quizId||{"message": "퀴즈가 삭제되었습니다."}|F:조영은/ B:신용의|
|상세페이지(질문등록)|POST|/detail/:quizId|/api/quiz/:quizId|{"content":"다섯 글자인가요?"}|{"message": "질문이 등록되었습니다."} 또는 {"message": "정답입니다!"}|F:채종원/ B:황수민|
|상세페이지(질문조회)|GET|/detail/:quizId|/api/quiz/:quizId/questions||{"data": [{"quizId": 1, "content":"다섯 글자인가요?", "solved": TRUE}, {"quizId": 1, "content":"지금도 사용되나요?", "solved": FALSE}]}|F:채종원/ B:황수민|
|상세페이지(질문체크)|PATCH|/detail/:quizId|/api/quiz/:quizId/questions|{"solved" : FALSE }|"message": "질문 OX 체크되었습니다."|F:채종원/ B:황수민|
