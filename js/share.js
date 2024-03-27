function kakaoShare()
    {   const shareTitle = '리연시: 리오 연애 시뮬레이션'
        const shareDes = '나는 리오와 연애할 수 있을까?'
        const shareURL = 'https://patrick3141592.github.io/'
        const shareImg = shareURL + 'img/인사리오.png'

        Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl:
            shareImg,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        buttons: [
        {
            title: '웹으로 이동',
            link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
            },
        },
        ],
    });}

