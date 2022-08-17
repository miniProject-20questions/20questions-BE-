# errorMessage #
## 회원가입 ##
- BAD_REQUEST(400) : BODY 입력값을 확인해주세요.
- BAD_REQUEST_PW(400) : 패스워드와 패스워드 확인란이 동일하지 않습니다.
- EXIST_NICK(403) : 닉네임 중복
- BAD_VALIDATION_ID(403) : ID 조건이 맞지 않습니다.
- BAD_VALIDATION_PW(403) : PW 조건이 맞지 않습니다.
- BAD_VALIDATION_NICK(403) : 닉네임 조건이 맞지 않습니다.
- FAILD_SQL(405) : 데이터베이스 에러
## 로그인 ##
- BAD_REQUEST(400) : BODY 입력값을 확인해주세요.
- BAD_VALIDATION(403) : ID나 PW가 틀렸습니다.
- FAILD_SQL(405) : 데이터베이스 에러
## 아이디 중복체크 ##
- BAD_REQUEST(400) : BODY 입력값을 확인해주세요.
- EXIST_ID(403) : ID 중복
## 로그인 토큰 ##
- NONE_LOGIN(401) : 로그인 후 이용해주세요.
---
## 메인페이지(퀴즈등록) ##
- BAD_REQUEST(400) : BODY 혹은 PARAMS 입력값을 확인해주세요.
- FAILD_SQL(405) : 데이터베이스 에러
## 메인페이지(퀴즈조회) ##
- FAILD_SQL(405) : 데이터베이스 에러
## 상세페이지(퀴즈상세조회) ##
- NOT_FOUND_QUIZ(404) : 존재하지 않는 퀴즈입니다.
- FAILD_SQL(405) : 데이터베이스 에러
## 상세페이지(퀴즈삭제) ##
- NOT_FOUND_QUIZ(404) : 존재하지 않는 퀴즈입니다.
- UNAUTHORIZED_USER(401) : 퀴즈 작성자만 퀴즈를 삭제할 수 있습니다.
- FAILD_SQL_DEL(405) : 데이터베이스 에러
## 상세페이지(퀴즈카테고리수정) ##
- NOT_FOUND_QUIZ(404) : 존재하지 않는 퀴즈입니다.
- BAD_REQUEST(400) : BODY 혹은 PARAMS 입력값을 확인해주세요.
- FAILD_SQL_UP(405) : 데이터베이스 에러
---
## 상세페이지(질문조회) ##
- FAILD_SQL(405) : 데이터베이스 에러
## 상세페이지(질문등록) ##
- BAD_REQUEST(400) : BODY 입력값을 확인해주세요.
- NOT_FOUND_QUIZ(404) : 존재하지 않는 퀴즈입니다.
- UNAUTHORIZED_USER(401) : 퀴즈 작성자는 질문을 등록할 수 없습니다.
- FORBIDDEN_END(403) : 완료된 퀴즈입니다.
- FORBIDDEN_SOL(403) : 퀴즈 작성자가 아직 OX 체크를 하지 않았습니다.
- FORBIDDEN_20(403) : 질문 20개가 등록되어 스무고개 퀴즈가 끝났습니다.
- FAILD_SQL(405) : 데이터베이스 에러
## 상세페이지(질문체크) ##
- BAD_REQUEST(400) : BODY 입력값을 확인해주세요.
- UNAUTHORIZED_USER(401) : 퀴즈 작성자만 질문 OX 체크를 할 수 있습니다.
- NOT_FOUND_QUE(404) : 존재하지 않는 질문입니다.
- FORBIDDEN_RE_SOL(403) : 이미 OX 체크 된 질문입니다.
- FAILD_SQL(405) : 데이터베이스 에러




