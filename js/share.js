const shareURL = 'https://patrick3141592.github.io/'

function kakaoShare()
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
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          itemContent: {
            profileText: 'Kakao',
            profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            titleImageText: 'Cheese cake',
            titleImageCategory: 'Cake',
            items: [
              {
                item: 'Cake1',
                itemOp: '1000원',
              },
              {
                item: 'Cake2',
                itemOp: '2000원',
              },
              {
                item: 'Cake3',
                itemOp: '3000원',
              },
              {
                item: 'Cake4',
                itemOp: '4000원',
              },
              {
                item: 'Cake5',
                itemOp: '5000원',
              },
            ],
            sum: '총 결제금액',
            sumOp: '15000원',
          },
          social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
          },
          buttons: [
            {
              title: '웹으로 이동',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
            {
              title: '앱으로 이동',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
          ],
        });
      }

