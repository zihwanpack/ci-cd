import http from 'http'; // ESM 방식으로 import

// 서버 설정
const PORT = 3000;
const HOST = 'localhost';

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  // 요청에 대한 응답 설정
  res.statusCode = 200; // HTTP 상태 코드
  res.setHeader('Content-Type', 'text/plain'); // 응답 헤더
  res.end('Hello, Node.js!'); // 응답 본문
});

// 서버 실행
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
