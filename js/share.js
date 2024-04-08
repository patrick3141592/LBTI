const shareURL = 'https://patrick3141592.github.io/'

function kakaoShare(pagenum)
    {   const shareTitle = '리연시: 리오 연애 시뮬레이션';
        const shareDes = '나는 리오와 연애할 수 있을까?';
        const shareImg = 'https://patrick3141592.github.io/img/웃음리오.png';

        Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: shareTitle,
            description: shareDes,
            imageUrl:
              shareImg,
            link: {
              mobileWebUrl: `../page/fail${pagenum}`,
              webUrl: `../page/fail${pagenum}`,
            },
          },
          buttons: [
            {
              title: '웹으로 이동',
              link: {
                mobileWebUrl: `../page/fail${pagenum}`,
                webUrl: `../page/fail${pagenum}`,
              },
            },
          ],
        });
      }

