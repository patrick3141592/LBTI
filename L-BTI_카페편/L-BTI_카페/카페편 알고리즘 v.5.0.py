import pandas as pd

def ask_question(question, choices):
    print(question)
    for i, choice in enumerate(choices):
        print(f"{chr(97 + i)}) {choice}")
    answer = input("답변을 입력하세요 (a, b, c, d 중 하나): ").strip().lower()
    while answer not in [chr(97 + i) for i in range(len(choices))]:
        print("잘못된 입력입니다. 다시 입력해주세요.")
        answer = input("답변을 입력하세요 (a, b, c, d 중 하나): ").strip().lower()
    return answer

def main():
    questions = [
        {
            "question": "1. 연인과 카페에 가기로 했다! 어디로 갈까?",
            "choices": ["걷기 귀찮아.. 가까운 곳 아무데나 가자.",
                        "조금 걷더라도 새로운 카페 가볼래?"],
            "category": "거리"
        },
        {
            "question": "2. 가고싶은 카페의 분위기는..",
            "choices": ["깔끔하고 모던", "아기자기하고 아늑", "빈티지", "MZ감성 뿜뿜"],
            "category": "분위기"
        },
        {
            "question": "3. 감성 vs. 맛. 당신의 픽은?",
            "choices": ["맛은 비슷비슷하지 뭐. 난 무조건 감성이다!",
                        "입으로 먹지, 눈으로 먹니? 카페의 근본은 ‘맛’이야."],
            "category": "감성/맛"
        },
        {
            "question": "4. 카페 가면 뭐 먹을래?",
            "choices": ["음료만 시켜도 충분한데? 배고프면 아무거나 시키지 뭐.",
                        "카페에서 디저트를 뺄 수는 없지!! 맛있는거 먹고싶다 후후."],
            "category": "음료/디저트"
        },
        {
            "question": "5. 내가 선호하는 카페는?",
            "choices": ["넓어야 쾌적하지! 무조건 넓어야돼.",
                        "상관없어. 작더라도 개인카페만의 감성이 있으니까!"],
            "category": "공간감"
        },
        {
            "question": "6. 배가 좀 고프니 디저트도 시켜볼까? 어떤 디저트를 먹을까?",
            "choices": ["빵, 와플, 쿠키! 이게 근본이지.",
                        "빵 말고 다른 메뉴를 원해. 빵은 어디에나 파는걸?"],
            "category": "디저트"
        }
    ]

    answers = {}

    for q in questions:
        answer = ask_question(q["question"], q["choices"])
        answers[q["category"]] = answer

    # 데이터 로드 (Sheet2의 A1:G13 범위)
    file_path = 'C:/Users/juyng/Desktop/티움/상권활성화/L-BTI 결과 알고리즘_v.2.0.xlsx'
    data = pd.read_excel(file_path, sheet_name='Sheet2', usecols='A:G', nrows=13)

    # 컬럼명 확인
    print("데이터 컬럼명:", data.columns.tolist())

    # 가중치 설정
    weights = {
        '거리': 0.5,
        '분위기': 3,
        '감성/맛': 0.5,
        '음료/디저트': 1,
        '공간감': 2.5,
        '디저트': 2
    }

    # 일치도 계산
    data['match_count'] = 0

    for col in weights.keys():
        data['match_count'] += (data[col] == answers[col]) * weights[col]

    # 가장 일치하는 카페들 찾기
    max_match_count = data['match_count'].max()
    best_matches = data[data['match_count'] == max_match_count]

    # 디버깅을 위한 데이터 출력
    print("일치하는 카페들:\n", best_matches)

    # 필터링 순서에 따른 최종 선택 로직
    priority_order = ['분위기', '디저트', '공간감', '음료/디저트', '감성/맛', '거리']

    index = 0
    while len(best_matches) > 1 and index < len(priority_order):
        col = priority_order[index]
        filtered_matches = best_matches[best_matches[col] == answers[col]]
        if len(filtered_matches) > 0:
            best_matches = filtered_matches
        index += 1

    # 최종 매칭된 카페 출력
    best_match = best_matches.iloc[0]
    print("\n당신의 답변과 가장 일치하는 카페는:", best_match['카페'])

if __name__ == "__main__":
    main()
