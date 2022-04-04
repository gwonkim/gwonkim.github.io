  module.exports = {
    webpack5: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  }


  // npm fs module not found
 // https://github.com/vercel/next.js/issues/7755
 
 /* 
 fs 모듈 호출 시 사용을 막기 위해 오류 발생
 사용 불가
 그래서 사용하기 위해서는 설정 필요
 */