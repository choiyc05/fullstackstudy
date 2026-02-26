# 260129

  ## JWT 클레임(Claim)의 세 가지 구조
    등록된 클레임 (Registered Claims): 토큰 정보를 표현하기 위해 미리 정의된 클레임 세트(필수는 아니지만 권장)로, 주로 3글자로 구성됩니다.

    iss (Issuer): 토큰 발급자.
    sub (Subject): 토큰 제목 (주로 사용자 ID).
    aud (Audience): 토큰 대상자.
    exp (Expiration Time): 만료 시간.
    iat (Issued At): 발급 시간.
    
    공개 클레임 (Public Claims): 사용자 정의 클레임으로, 충돌을 방지하기 위해 URI 형태로 정의해야 합니다.
    비공개 클레임 (Private Claims): 클라이언트와 서버 간 협의 하에 사용되는 사용자 정의 클레임으로, 클라이언트 식별자 등 정보를 공유할 때 사용합니다. 