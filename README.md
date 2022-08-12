# 20questions-BE-
## 1.ERD ##
![20questions-erd](https://user-images.githubusercontent.com/109029407/184304942-6f0c3b24-2f5b-4d87-b431-b06882faac37.png)
---
## 2. API 설계 ##
|기능|method|URL(service)|API URL|request|response|담당자|
|------|---|---|---|---|---|---|
|회원가입|POST|/|/api/auth/signup|{"id" : "Sumin", "password" : "1234", "confirm": "1234"}|{"message": "회원가입을 축하드립니다!"}|최성영|
|로그인|POST|/|/api/auth/signin|{"id" : "Sumin", "password" : "1234"}|{"message": "Sumin님, 환영합니다!"}|최성영|
|메인페이지(퀴즈등록)|POST|/|/api/quiz|{"token":"true", "title":"뭘까요?", "category": 1, "answer" : "판다"}|{"message": "퀴즈가 등록되었습니다."}|신용의|
|메인페이지(퀴즈조회)|GET|/|/api/quiz|-|{"data": [{"id": "Sumin", "title":"뭘까요?", "category": 1, "answer" : "판다", "url" : "사진.jpg"}, {"id": "Minsu", "title":"뭐게요?", "category": 2, "answer" : "의사", "url" : "사진.jpg"}]} |신용의|
|상세페이지(퀴즈상세조회)|GET|/detail/:quizId|/api/quiz/:quizId|{"token":"true"}|{"title":"뭘까요?", "category": 1, "answer" : "판다", "url" : "사진.jpg"}|신용의|
|상세페이지(퀴즈삭제)|DELETE|/detail/:quizId|/api/quiz/:quizId|{"token":"true"}|{"message": "퀴즈가 삭제되었습니다."}|신용의|
|상세페이지(질문등록)|POST|/detail/:quizId|/api/quiz/:quizId|{"token":"true", "content":"다섯 글자인가요?"}|{"message": "질문이 등록되었습니다."} 또는 {"message": "정답입니다!"}|황수민|
|상세페이지(질문조회)|GET|/detail/:quizId|/api/quiz/:quizId/questions|{"token":"true"}|{"data": [{"quizId": 1, "content":"다섯 글자인가요?", "solved": TRUE}, {"quizId": 1, "content":"지금도 사용되나요?", "solved": FALSE}]}|황수민|
|상세페이지(질문체크)|PATCH|/detail/:quizId|/api/quiz/:quizId/questions|{"token":"true", "solved" : FALSE }|"message": "질문 OX 체크되었습니다."|황수민|
