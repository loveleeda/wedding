# 모바일 청첩장 템플릿

따뜻한 아이보리와 베이지 톤의 모바일 청첩장 템플릿입니다. 기존 React/Gatsby 기반의 주요 섹션과 동작을 유지합니다.

## 포함된 섹션
- 메인 사진과 예식 정보
- 초대 인사말 및 양가 가족 정보
- 참석 여부 전달(RSVP)
- 사진 갤러리
- 오시는 길
- 마음 전하실 곳(계좌번호 복사)
- 청첩장 링크 공유 및 캘린더 저장

## 1. 기본 정보 수정

프로젝트 최상위의 `config.js`에서 예식 정보, 이름, 가족 이름, 계좌 정보를 수정합니다.

`YOUR_GITHUB_USERNAME`과 `YOUR_KAKAO_JAVASCRIPT_KEY`도 실제 배포/카카오 설정에 맞게 바꾸세요.

**주의:** 공개 GitHub 저장소에 실제 계좌번호, 전화번호 등 개인정보를 올리지 마세요. 계좌 정보를 공개할지 신중하게 결정하세요.

## 2. 사진 교체

- 메인 사진: `src/assets/33-1.jpg`
- 갤러리 사진: `src/assets` 안의 숫자-숫자 형식 JPG 파일
- 지도 이미지: `src/assets/map.jpg`
- 카카오톡 공유 썸네일: `static/og-image.jpg` (파일이 존재하는 경우 교체)

갤러리 사진은 파일명 순서대로 표시됩니다.

## 3. 인사말과 장소 안내 수정

- 초대 문구/가족 소개: `src/components/greeting.jsx`
- 오시는 길 안내 및 지도 퍼가기 정보: `src/components/location.jsx`
- 하단 문구: `src/components/quote.jsx`

지도는 카카오맵에서 새 장소의 퍼가기 코드를 발급받아 `timestamp`, `key` 값을 교체하세요.

## 4. RSVP 설정

`src/components/rsvp.jsx`의 `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`을 본인이 소유한 Google Apps Script 웹 앱 URL로 바꿔야 참석 응답이 본인의 스프레드시트로 전달됩니다. 설정 전에는 RSVP 전송이 작동하지 않습니다.

## 5. 로컬 실행

Node.js 설치 후 프로젝트 폴더에서:

```bash
npm install
npm run develop
```

브라우저에서 `http://localhost:8000`을 엽니다.

## 6. 배포

배포는 아직 설정하지 않았습니다. GitHub Pages 등을 사용할 경우 `gatsby-config.js`의 `siteUrl`, `pathPrefix`와 `config.js`의 초대장 URL을 실제 주소에 맞게 확인한 뒤 진행하세요.
