/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"토런트 파일||*.torrent||모든 파일 (*.*)||*.*||",
   "DLG_BTN_OK":"확인",
   "DLG_BTN_CANCEL":"취소",
   "DLG_BTN_APPLY":"적용(A)",
   "DLG_BTN_YES":"예",
   "DLG_BTN_NO":"아니오",
   "DLG_BTN_CLOSE":"닫기(C)",
   "DLG_SETTINGS_00":"설정",
   "DLG_SETTINGS_1_GENERAL_01":"언어",
   "DLG_SETTINGS_1_GENERAL_02":"언어(L):",
   "DLG_SETTINGS_1_GENERAL_10":"비공개",
   "DLG_SETTINGS_1_GENERAL_11":"자동 업데이트 검사(C)",
   "DLG_SETTINGS_1_GENERAL_12":"시험판으로 업데이트",
   "DLG_SETTINGS_1_GENERAL_13":"새 버전 검색시 무작위 정보를 보냄",
   "DLG_SETTINGS_1_GENERAL_17":"다운로드 할 때",
   "DLG_SETTINGS_1_GENERAL_18":"미완성 파일에 .!ut 추가(A)",
   "DLG_SETTINGS_1_GENERAL_19":"모든 파일을 미리 할당(R)",
   "DLG_SETTINGS_1_GENERAL_20":"활성 토런트가 있으면 대기 상태 안 들어감(E)",
   "DLG_SETTINGS_2_UI_01":"옵션 표시",
   "DLG_SETTINGS_2_UI_02":"토런트 삭제시 확인(O)",
   "DLG_SETTINGS_2_UI_03":"트래커 삭제시 확인(E)",
   "DLG_SETTINGS_2_UI_04":"프로그램 종료 전 확인(H)",
   "DLG_SETTINGS_2_UI_05":"배경에 두 색을 교대로 사용",
   "DLG_SETTINGS_2_UI_06":"상태 바에 현재 속도 표시(T)",
   "DLG_SETTINGS_2_UI_07":"상태 표시줄에 속도 제한 표시(O)",
   "DLG_SETTINGS_2_UI_15":"토런트를 추가할 때",
   "DLG_SETTINGS_2_UI_16":"자동 다운로드를 시작하지 않음(D)",
   "DLG_SETTINGS_2_UI_17":"프로그램 창 활성화(C)",
   "DLG_SETTINGS_2_UI_18":"창을 열어서 토렌트 내의 파일을 표시(H)",
   "DLG_SETTINGS_2_UI_19":"더블 클릭할 때의 동작",
   "DLG_SETTINGS_2_UI_20":"배포 중인 토렌트:",
   "DLG_SETTINGS_2_UI_22":"다운로드 중인 토렌트:",
   "DLG_SETTINGS_3_PATHS_01":"다운받은 파일의 저장 위치",
   "DLG_SETTINGS_3_PATHS_02":"새 다운로드 위치(P):",
   "DLG_SETTINGS_3_PATHS_03":"수동 추가시 항상 대화창 표시(W)",
   "DLG_SETTINGS_3_PATHS_06":"완료된 다운로드 이동 위치(M):",
   "DLG_SETTINGS_3_PATHS_07":"디렉토리 이름 끝에 토런트 라벨명 삽입(A)",
   "DLG_SETTINGS_3_PATHS_10":"기본 다운로드 디렉토리에서만 이동(O)",
   "DLG_SETTINGS_3_PATHS_11":"토런트 파일의 위치",
   "DLG_SETTINGS_3_PATHS_12":"토런트 파일의 저장 위치:",
   "DLG_SETTINGS_3_PATHS_15":"완료된 작업의 토런트 파일 이동 위치:",
   "DLG_SETTINGS_3_PATHS_18":"자동 올림 토런트 파일의 위치(A)",
   "DLG_SETTINGS_3_PATHS_19":"올린 토런트 파일 삭제(D)",
   "DLG_SETTINGS_4_CONN_01":"포트 설정",
   "DLG_SETTINGS_4_CONN_02":"외부 연결 포트:",
   "DLG_SETTINGS_4_CONN_04":"무작위 포트",
   "DLG_SETTINGS_4_CONN_05":"시작 때마다 무작위 포트 결정(R)",
   "DLG_SETTINGS_4_CONN_06":"UPnP 포트 매핑 활성화(U)",
   "DLG_SETTINGS_4_CONN_07":"NAT-PMP 포트 설정 활성화(N)",
   "DLG_SETTINGS_4_CONN_08":"프록시 서버",
   "DLG_SETTINGS_4_CONN_09":"종류(Y):",
   "DLG_SETTINGS_4_CONN_11":"프록시(P):",
   "DLG_SETTINGS_4_CONN_13":"포트(O):",
   "DLG_SETTINGS_4_CONN_15":"인증",
   "DLG_SETTINGS_4_CONN_16":"사용자명:",
   "DLG_SETTINGS_4_CONN_18":"암호:",
   "DLG_SETTINGS_4_CONN_19":"프록시를 통해 사용자명 제공",
   "DLG_SETTINGS_4_CONN_20":"P2P 연결에 프록시 사용",
   "DLG_SETTINGS_4_CONN_21":"윈도우 방화벽의 예외 적용(F)",
   "DLG_SETTINGS_4_CONN_22":"프록시 프라이버시",
   "DLG_SETTINGS_4_CONN_23":"모든 로컬 DNS 해제",
   "DLG_SETTINGS_4_CONN_24":"정보 유출 가능성이 있는 기능 해제",
   "DLG_SETTINGS_4_CONN_25":"프록시를 지원하지 않는 연결 해제",
   "DLG_SETTINGS_5_BANDWIDTH_01":"전체 업로드 대역폭 제한",
   "DLG_SETTINGS_5_BANDWIDTH_02":"최대 업로드 속도(kB/초): [0: 무제한]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"자동",
   "DLG_SETTINGS_5_BANDWIDTH_05":"다운 중이 아닐 때의 업 속도(kB/초):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"전체 다운로드 대역폭 제한",
   "DLG_SETTINGS_5_BANDWIDTH_08":"최대 다운로드 속도(kB/초): [0: 무제한]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"연결 갯수",
   "DLG_SETTINGS_5_BANDWIDTH_11":"전체 최대 연결:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"토런트당 최대 연결:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"토런트당 업로드:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"업로드 속도가 90% 이하일 때 추가 업로드 사용",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"전송 오버헤드에 제한을 적용",
   "DLG_SETTINGS_5_BANDWIDTH_20":"uTP 연결에 제한을 적용",
   "DLG_SETTINGS_6_BITTORRENT_01":"비트토런트 기본 기능",
   "DLG_SETTINGS_6_BITTORRENT_02":"DHT 사용(E)",
   "DLG_SETTINGS_6_BITTORRENT_03":"트래커에 정보 입수 요청(A)",
   "DLG_SETTINGS_6_BITTORRENT_04":"새 토런트에 DHT 활성화(E)",
   "DLG_SETTINGS_6_BITTORRENT_05":"피어 교환(P)",
   "DLG_SETTINGS_6_BITTORRENT_06":"망내 피어 찾기(L)",
   "DLG_SETTINGS_6_BITTORRENT_07":"망내 피어 대역폭 제한(L)",
   "DLG_SETTINGS_6_BITTORRENT_08":"트래커에 보고할 IP/호스트명:",
   "DLG_SETTINGS_6_BITTORRENT_10":"프로토콜 암호화",
   "DLG_SETTINGS_6_BITTORRENT_11":"내보내기:",
   "DLG_SETTINGS_6_BITTORRENT_13":"들어오는 전통적 연결 허용",
   "DLG_SETTINGS_6_BITTORRENT_14":"대역폭 관리 활성화 [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"UDP 트래커 지원 활성화",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Enable Transfer Cap",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Cap Settings",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"제한 방법:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"대역폭 제한:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"기간(일):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"해당 기간의 사용 기록:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"업로드:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"다운로드:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"업로드 + 다운로드:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"기간:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"지난 %d일간",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"기록 지우기",
   "DLG_SETTINGS_8_QUEUEING_01":"대기열 설정",
   "DLG_SETTINGS_8_QUEUEING_02":"최대 활성 토런트 (업/다운 모두):",
   "DLG_SETTINGS_8_QUEUEING_04":"최대 활성 다운로드:",
   "DLG_SETTINGS_8_QUEUEING_06":"배포 시간 [기본값]",
   "DLG_SETTINGS_8_QUEUEING_07":"최소 비율 (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"최소 배포 시간 (분):",
   "DLG_SETTINGS_8_QUEUEING_11":"다운로드보다 배포가 우선됨(S)",
   "DLG_SETTINGS_8_QUEUEING_12":"토런트가 배포 목표에 도달하면",
   "DLG_SETTINGS_8_QUEUEING_13":"업로드 속도 제한 (kB/s): [0: 정지]",
   "DLG_SETTINGS_9_SCHEDULER_01":"일정표 사용(E)",
   "DLG_SETTINGS_9_SCHEDULER_02":"일정표",
   "DLG_SETTINGS_9_SCHEDULER_04":"일정표 설정",
   "DLG_SETTINGS_9_SCHEDULER_05":"제한된 업로드 속도 (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"다운 속도 제한 (kB/초):",
   "DLG_SETTINGS_9_SCHEDULER_09":"끄면 DHT 사용 안함(D)",
   "DLG_SETTINGS_9_WEBUI_01":"Web UI 활성화(W)",
   "DLG_SETTINGS_9_WEBUI_02":"인증",
   "DLG_SETTINGS_9_WEBUI_03":"사용자명(U):",
   "DLG_SETTINGS_9_WEBUI_05":"암호(P):",
   "DLG_SETTINGS_9_WEBUI_07":"사용자명으로 손님 계정 사용(G):",
   "DLG_SETTINGS_9_WEBUI_09":"접속성",
   "DLG_SETTINGS_9_WEBUI_10":"대체 포트(기본은 연결 포트)(L):",
   "DLG_SETTINGS_9_WEBUI_12":"다음 IP로부터의 액세스만 허용(여러 개일 경우 쉼표로 구분):",
   "DLG_SETTINGS_A_ADVANCED_01":"고급 설정 [주의: 변경하지 마세요!]",
   "DLG_SETTINGS_A_ADVANCED_02":"값(V)",
   "DLG_SETTINGS_A_ADVANCED_03":"참(T)",
   "DLG_SETTINGS_A_ADVANCED_04":"거짓(F)",
   "DLG_SETTINGS_A_ADVANCED_05":"설정(S)",
   "DLG_SETTINGS_B_ADV_UI_01":"속도 목록 [쉼표로 구분]",
   "DLG_SETTINGS_B_ADV_UI_02":"자동 속도 목록을 무시(O)",
   "DLG_SETTINGS_B_ADV_UI_03":"업로드 속도 목록:",
   "DLG_SETTINGS_B_ADV_UI_05":"다운로드 속도 목록:",
   "DLG_SETTINGS_B_ADV_UI_07":"영구 라벨 [라벨이 여러 개면 | 문자로 구분]",
   "DLG_SETTINGS_B_ADV_UI_08":"검색 공급자 [표시방법: 이름|주소]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"기본 캐시 설정",
   "DLG_SETTINGS_C_ADV_CACHE_02":"디스크 캐시는 자주 사용하는 데이타를 메모리에 보관하여 하드 디스크의 사용을 줄여줍니다. 보통 µTorrent 가 자동으로 캐시를 관리하지만 원하시는 방식으로 바꿀 수 있습니다.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"자동 캐시 크기를 무시하고 직접 지정(MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"캐시가 필요 없으면 메모리 사용을 줄임(R)",
   "DLG_SETTINGS_C_ADV_CACHE_06":"상세 캐시 설정",
   "DLG_SETTINGS_C_ADV_CACHE_07":"디스크 쓰기 캐시 활성화(W)",
   "DLG_SETTINGS_C_ADV_CACHE_08":"매 2분마다 미사용 조각 쓰기(I)",
   "DLG_SETTINGS_C_ADV_CACHE_09":"조각이 완성되면 즉시 쓰기(T)",
   "DLG_SETTINGS_C_ADV_CACHE_10":"디스크 읽시 캐시 활성화(R)",
   "DLG_SETTINGS_C_ADV_CACHE_11":"업로드 속도가 느리면 읽기 캐시 끔",
   "DLG_SETTINGS_C_ADV_CACHE_12":"오래된 조각을 캐시에서 제거",
   "DLG_SETTINGS_C_ADV_CACHE_13":"캐시 한계가 오면 자동으로 캐시 크기 늘림",
   "DLG_SETTINGS_C_ADV_CACHE_14":"윈도우즈의 디스크 쓰기 캐시 비활성(D)",
   "DLG_SETTINGS_C_ADV_CACHE_15":"윈도우즈의 디스크 읽기 캐시 비활성(O)",
   "DLG_SETTINGS_C_ADV_RUN_01":"프로그램 실행",
   "DLG_SETTINGS_C_ADV_RUN_02":"토렌트가 끝나면 다음 프로그램을 실행합니다 :",
   "DLG_SETTINGS_C_ADV_RUN_04":"토렌트의 상태가 변경되면 다음 프로그램을 실행합니다:",
   "DLG_SETTINGS_C_ADV_RUN_06":"다음 명령어들을 사용할 수 있습니다.\r\n%F - 다운로드한 파일명(단일 파일 토렌트만)\r\n%D - 파일의 저장 폴더\r\n%N - 토렌트 제목\r\n%S - 토렌트 상태\r\n%L - 라벨\r\n%T - 트래커\r\n%M - 상태 설명 ('상태' 열의 내용)\r\n%I - 16진 해시정보\r\n\r\n토렌트 상태는 다음 값의 합계입니다.\r\n시작됨 = 1, 검사중 = 2, 검사 후 시작 = 4, 검사 완료 = 8,\r\n오류 = 16, 일시정지 = 32, 자동 = 64, 불러오기 완료 = 128",
   "DLG_TORRENTPROP_00":"토런트 속성",
   "DLG_TORRENTPROP_1_GEN_01":"트래커 (빈 줄로 분리)",
   "DLG_TORRENTPROP_1_GEN_03":"대역폭 설정",
   "DLG_TORRENTPROP_1_GEN_04":"최대 업로드 속도 (kB/s): [0: 무제한]",
   "DLG_TORRENTPROP_1_GEN_06":"최대 다운로드 속도 (kB/s): [0: 무제한]",
   "DLG_TORRENTPROP_1_GEN_08":"업로드 갯수: [0: 무제한]",
   "DLG_TORRENTPROP_1_GEN_10":"배포 시간",
   "DLG_TORRENTPROP_1_GEN_11":"기본 설정 무시(O)",
   "DLG_TORRENTPROP_1_GEN_12":"Minimum ratio (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimum seeding time (minutes):",
   "DLG_TORRENTPROP_1_GEN_16":"기타 설정",
   "DLG_TORRENTPROP_1_GEN_17":"초도 배포(I)",
   "DLG_TORRENTPROP_1_GEN_18":"DHT 활성(E)",
   "DLG_TORRENTPROP_1_GEN_19":"피어 교환(P)",
   "DLG_ADDEDITRSSFEED_03":"RSS",
   "DLG_ADDEDITRSSFEED_04":"RSS 주소:",
   "DLG_ADDEDITRSSFEED_05":"별명(C):",
   "DLG_ADDEDITRSSFEED_06":"예약",
   "DLG_ADDEDITRSSFEED_07":"모든 항목을 자동 다운로드하지 않음(N)",
   "DLG_ADDEDITRSSFEED_08":"RSS 안의 모든 항목을 자동 다운로드함(A)",
   "DLG_ADDEDITRSSFEED_09":"자동 에피소드 필터 사용(S)",
   "DLG_RSSDOWNLOADER_02":"RSS||즐겨찾기||기록||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"필터 설정",
   "DLG_RSSDOWNLOADER_05":"이름:",
   "DLG_RSSDOWNLOADER_06":"필터:",
   "DLG_RSSDOWNLOADER_07":"예외:",
   "DLG_RSSDOWNLOADER_08":"저장:",
   "DLG_RSSDOWNLOADER_09":"RSS:",
   "DLG_RSSDOWNLOADER_10":"품질:",
   "DLG_RSSDOWNLOADER_11":"에피소드 번호(E)[예 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"해석된 이름 대신 원래 이름을 필터로 사용(F)",
   "DLG_RSSDOWNLOADER_13":"자동 다운로드를 시작하지 않음",
   "DLG_RSSDOWNLOADER_14":"자동 ep. 필터",
   "DLG_RSSDOWNLOADER_15":"다운로드 최우선권(G)",
   "DLG_RSSDOWNLOADER_16":"최소 간격(M):",
   "DLG_RSSDOWNLOADER_17":"새 토렌트의 라벨:",
   "DLG_RSSDOWNLOADER_18":"RSS 항목 추가...",
   "DLG_RSSDOWNLOADER_19":"RSS 항목 수정(E)...",
   "DLG_RSSDOWNLOADER_20":"RSS 비활성(A)",
   "DLG_RSSDOWNLOADER_21":"RSS 활성(A)",
   "DLG_RSSDOWNLOADER_22":"RSS 업데이트(U)",
   "DLG_RSSDOWNLOADER_23":"RSS 항목 지움(D)",
   "DLG_RSSDOWNLOADER_24":"다운로드(D)",
   "DLG_RSSDOWNLOADER_25":"브라우저로 주소 열기(B)",
   "DLG_RSSDOWNLOADER_26":"즐겨찾기에 추가(A)",
   "DLG_RSSDOWNLOADER_27":"추가(A)",
   "DLG_RSSDOWNLOADER_28":"삭제(D)",
   "DLG_RSSDOWNLOADER_29":"모두",
   "DLG_RSSDOWNLOADER_30":"(모두)",
   "DLG_RSSDOWNLOADER_31":"(언제나 맞추기)||(한번만 맞추기)||12시간||1일||2일||3일||4일||1주||2주||3주||1달||",
   "DLG_RSSDOWNLOADER_32":"RSS 항목 추가",
   "DLG_RSSDOWNLOADER_33":"RSS 항목 수정",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"RSS 항목 \"%s\"을(를) 삭제할까요?",
   "FEED_COL_FULLNAME":"전체 이름",
   "FEED_COL_NAME":"이름",
   "FEED_COL_EPISODE":"에피소드",
   "FEED_COL_FORMAT":"형식",
   "FEED_COL_CODEC":"코덱",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"피드",
   "FEED_COL_URL":"소스 주소",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"포트",
   "PRS_COL_CLIENT":"클라이언트",
   "PRS_COL_FLAGS":"상태",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"검색 능력",
   "PRS_COL_DOWNSPEED":"다운 속도",
   "PRS_COL_UPSPEED":"업 속도",
   "PRS_COL_REQS":"요구",
   "PRS_COL_WAITED":"대기",
   "PRS_COL_UPLOADED":"업로드",
   "PRS_COL_DOWNLOADED":"다운로드",
   "PRS_COL_HASHERR":"해시오류",
   "PRS_COL_PEERDL":"피어 다운",
   "PRS_COL_MAXUP":"최대 업",
   "PRS_COL_MAXDOWN":"최대 다운",
   "PRS_COL_QUEUED":"대기 중",
   "PRS_COL_INACTIVE":"비활성",
   "FI_COL_DONE":"완료",
   "FI_COL_FIRSTPC":"첫 번째 조각",
   "FI_COL_NAME":"이름",
   "FI_COL_NUMPCS":"조각 개수",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"우선권",
   "FI_COL_SIZE":"크기",
   "FI_PRI0":"통과",
   "FI_PRI1":"낮음",
   "FI_PRI2":"보통",
   "FI_PRI3":"높음",
   "GN_TP_01":"다운 받음:",
   "GN_TP_02":"업로드:",
   "GN_TP_03":"배포:",
   "GN_TP_04":"남은 시간:",
   "GN_TP_05":"다운 속도:",
   "GN_TP_06":"업 속도:",
   "GN_TP_07":"피어:",
   "GN_TP_08":"비율:",
   "GN_TP_09":"저장 파일명:",
   "GN_TP_10":"해시:",
   "GN_GENERAL":"일반",
   "GN_TRANSFER":"전송",
   "GN_XCONN":"%d개/%d개 연결됨 (%d 대기)",
   "MAIN_TITLEBAR_SPEED":"D:%s U:%s - %s",
   "MENU_COPY":"복사(C)",
   "MENU_RESET":"초기화(R)",
   "MENU_UNLIMITED":"무제한",
   "MP_RESOLVE_IPS":"IP 분석(R)",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"다운 받지 않기(D)",
   "MF_HIGH":"높은 우선권(H)",
   "MF_LOW":"낮은 우선권(L)",
   "MF_NORMAL":"보통 우선권(N)",
   "ML_COPY_MAGNETURI":"자석 주소 복사(M)",
   "ML_DELETE_DATA":"데이터 삭제(L)",
   "ML_DELETE_TORRENT":"토렌트 지움(D)",
   "ML_DELETE_DATATORRENT":"데이터와 토렌트 둘 다 지움(E)",
   "ML_FORCE_RECHECK":"강제 재검사",
   "ML_FORCE_START":"강제 시작(F)",
   "ML_LABEL":"라벨",
   "ML_PAUSE":"일시정지(P)",
   "ML_PROPERTIES":"특성(E)",
   "ML_QUEUEDOWN":"대기 목록 아래로 내리기(D)",
   "ML_QUEUEUP":"대기 목록 위로 올리기(U)",
   "ML_REMOVE":"삭제(R)",
   "ML_REMOVE_AND":"삭제 하고...",
   "ML_START":"시작(S)",
   "ML_STOP":"정지(T)",
   "OV_CAT_ACTIVE":"활성",
   "OV_CAT_ALL":"전체",
   "OV_CAT_COMPL":"완료",
   "OV_CAT_DL":"다운 중",
   "OV_CAT_INACTIVE":"비활성",
   "OV_CAT_NOLABEL":"라벨 없음",
   "OV_COL_AVAIL":"||가용||가용성",
   "OV_COL_DATE_ADDED":"추가 시간",
   "OV_COL_DATE_COMPLETED":"완료 시간",
   "OV_COL_DONE":"완료",
   "OV_COL_DOWNLOADED":"다운로드",
   "OV_COL_DOWNSPD":"다운 속도",
   "OV_COL_ETA":"예상시간",
   "OV_COL_LABEL":"라벨",
   "OV_COL_NAME":"이름",
   "OV_COL_ORDER":"번호",
   "OV_COL_PEERS":"피어",
   "OV_COL_REMAINING":"남은 양",
   "OV_COL_SEEDS":"배포",
   "OV_COL_SEEDS_PEERS":"배포/피어",
   "OV_COL_SHARED":"비율",
   "OV_COL_SIZE":"크기",
   "OV_COL_SOURCE_URL":"소스 주소",
   "OV_COL_STATUS":"상태",
   "OV_COL_UPPED":"업로드",
   "OV_COL_UPSPD":"업 속도",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"%d 개의 선택된 토런트와 데이터를 삭제하시겠습니까?",
   "OV_CONFIRM_DELETEDATA_ONE":"선택된 토런트와 데이터를 삭제하시겠습니까?",
   "OV_CONFIRM_DELETE_MULTIPLE":"%d 개의 선택된 토런트를 삭제하시겠습니까?",
   "OV_CONFIRM_DELETE_ONE":"선택된 토런트를 삭제하시겠습니까?",
   "OV_CONFIRM_DELETE_RSSFILTER":"RSS 필터 \"%s\"을(를) 지울까요?",
   "OV_FL_CHECKED":"검사 %:.1d%",
   "OV_FL_DOWNLOADING":"다운 중",
   "OV_FL_ERROR":"오류: %s",
   "OV_FL_FINISHED":"완료",
   "OV_FL_PAUSED":"일시정지",
   "OV_FL_QUEUED":"대기 중",
   "OV_FL_QUEUED_SEED":"배포 대기 중",
   "OV_FL_SEEDING":"배포 중",
   "OV_FL_STOPPED":"정지",
   "OV_NEWLABEL_CAPTION":"라벨 입력",
   "OV_NEWLABEL_TEXT":"선택한 토런트의 새 라벨을 입력하세요:",
   "OV_NEW_LABEL":"새 라벨...",
   "OV_REMOVE_LABEL":"라벨 제거",
   "OV_TABS":"일반||트래커||피어||조각||파일||속도||기록||",
   "OV_TB_ADDTORR":"토런트 추가",
   "OV_TB_ADDURL":"주소에서 토런트 추가",
   "OV_TB_PAUSE":"일시정지",
   "OV_TB_PREF":"설정",
   "OV_TB_QUEUEDOWN":"대기 목록 아래로 내리기",
   "OV_TB_QUEUEUP":"대기 목록 위로 올리기",
   "OV_TB_REMOVE":"삭제",
   "OV_TB_RSSDOWNLDR":"RSS 다운로더",
   "OV_TB_START":"시작",
   "OV_TB_STOP":"정지",
   "MM_FILE":"파일(F)",
   "MM_FILE_ADD_TORRENT":"토렌트 추가(A)...",
   "MM_FILE_ADD_URL":"주소에서 토렌트 추가(U)...",
   "MM_OPTIONS":"옵션(O)",
   "MM_OPTIONS_PREFERENCES":"설정(P)",
   "MM_OPTIONS_SHOW_CATEGORY":"분류 보기(C)",
   "MM_OPTIONS_SHOW_DETAIL":"상세 정보 보기(D)",
   "MM_OPTIONS_SHOW_STATUS":"상태 표시줄 보기(S)",
   "MM_OPTIONS_SHOW_TOOLBAR":"도구 막대 보기(T)",
   "MM_OPTIONS_TAB_ICONS":"탭에 아이콘 표시(I)",
   "MM_HELP":"도움말(H)",
   "MM_HELP_UT_WEBPAGE":"µTorrent 홈페이지(W)",
   "MM_HELP_UT_FORUMS":"µ토렌트 토론장(F)",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"토렌트",
   "STM_TORRENTS_PAUSEALL":"모든 토렌트 일시정지(P)",
   "STM_TORRENTS_RESUMEALL":"모든 토렌트 재시작(R)",
   "SB_DOWNLOAD":"D: %s%z/초",
   "SB_LOCAL":" L: %z/초",
   "SB_OVERHEAD":" O: %z/초",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"U: %s%z/초",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"고급 설정",
   "ST_CAPT_BANDWIDTH":"대역폭",
   "ST_CAPT_CONNECTION":"연결",
   "ST_CAPT_DISK_CACHE":"디스크 캐시",
   "ST_CAPT_FOLDER":"디렉토리",
   "ST_CAPT_GENERAL":"일반",
   "ST_CAPT_SCHEDULER":"일정표",
   "ST_CAPT_QUEUEING":"대기열",
   "ST_CAPT_UI_EXTRAS":"UI 기타",
   "ST_CAPT_UI_SETTINGS":"UI 설정",
   "ST_CAPT_BITTORRENT":"비트토런트",
   "ST_CAPT_WEBUI":"웹 UI",
   "ST_CAPT_TRANSFER_CAP":"Transfer Cap",
   "ST_CAPT_RUN_PROGRAM":"프로그램 실행",
   "ST_CBO_UI_DBLCLK_TOR":"속성 보기||시작/정지||폴더 열기||다운로드 막대 보기||",
   "ST_CBO_ENCRYPTIONS":"없음||있음||강제||",
   "ST_CBO_PROXY":"(없음)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"Uploads||Downloads||Uploads + Downloads||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"이름",
   "ST_COL_VALUE":"값",
   "ST_SCH_DAYCODES":"월||화||수||목||금||토||일||",
   "ST_SCH_DAYNAMES":"뭘요일||화요일||수요일||목요일||금요일||토요일||일요일||",
   "ST_SCH_LGND_FULL":"최대 속도",
   "ST_SCH_LGND_FULLEX":"최고 속도 - 전체 설정에 지정된 대역폭 사용",
   "ST_SCH_LGND_LIMITED":"제한",
   "ST_SCH_LGND_LIMITEDEX":"속도 제한 - 일정표에 지정된 대역폭 한계 사용",
   "ST_SCH_LGND_SEEDING":"배포만 함",
   "ST_SCH_LGND_SEEDINGEX":"배포만 함 - 업로드만 함 (미완성 파일 포함)",
   "ST_SCH_LGND_OFF":"끄기",
   "ST_SCH_LGND_OFFEX":"종료 - 지정하지 않은 모든 토런트 중지",
   "ST_SEEDTIMES_HOURS":"<= %d 시간",
   "ST_SEEDTIMES_IGNORE":"(무시)",
   "ST_SEEDTIMES_MINUTES":"<= %d 분",
   "TIME_DAYS_HOURS":"%d일 %d시",
   "TIME_HOURS_MINS":"%d시 %d분",
   "TIME_MINS_SECS":"%d분 %d초",
   "TIME_SECS":"%d초",
   "TIME_WEEKS_DAYS":"%d주 %d일",
   "TIME_YEARS_WEEKS":"%d년 %d주",
   "ML_MORE_ACTIONS":"More Action",
   "Torrents":"토렌트",
   "Feeds":"피드",
   "App":"앱",
   "country":"국가",
   "ETA":"ETA",
   "of":"/",
   "/s":"/s",
   "Paste a torrent or feed URL":"토렌트 또는 URL 주소 붙여넣기",
   "Home":"홈",
   "Logout":"로그아웃",
   "Seeding":"배포",
   "All Feeds":"모든 피드",
   "bitrate":"비트레이트",
   "resolution":"해상도",
   "length":"길이",
   "streamable":"스트리밍",
   "type":"형식",
   "remote":"원격",
   "about":"정보",
   "sessions":"세션",
   "share":"공유",
   "Share this torrent":"이 토렌트 공유",
   "Share link":"링크 공유",
   "add":"추가",
   "logout":"로그아웃",
   "log in":"로그인",
   "anywhere access":"Anywhere 액세스",
   "stay signed in":"로그인 상태 유지",
   "download":"다운로드",
   "Your client is currently not available. Verify that it is connected to the internet.":"귀하의 클라이언트는 현재 사용할 수 없습니다. 인터넷에 연결되었는지 확인하십시오.",
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":"귀하의 &micro;토렌트 클라이언트와 통신할 수 없습니다. 이 메시지는 연결이 복구되면 자동으로 사라집니다.",
   "Open file":"파일 열기",
   "Download to your computer":"컴퓨터에 다운로드",
   "Open with VLC Media Player":"VLC 미디어 플레이어로 열기",
   "Actions":"작업",
   "season":"시즌",
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":"설정을 저장",
   "DLG_SETTINGS_MENU_TITLE":"설정",
   "DLG_SETTINGS_D_REMOTE_01":"BitTorrent 원격",
   "DLG_SETTINGS_D_REMOTE_02":"BitTorrent 원격을 쓰면 브라우저를 통해 쉽고 안전하게 클라이언트에 접속할 수 있습니다.",
   "DLG_SETTINGS_D_REMOTE_03":"아래 연결을 활성화하고 아이디와 암호를 정한 후, 이 컴퓨터를 켜 두세요.",
   "DLG_SETTINGS_D_REMOTE_04":"자세히 알아보기",
   "DLG_SETTINGS_D_REMOTE_05":"BitTorrent 원격 접속 사용",
   "DLG_SETTINGS_D_REMOTE_06":"인증",
   "DLG_SETTINGS_D_REMOTE_07":"아이디:",
   "DLG_SETTINGS_D_REMOTE_08":"암호:",
   "DLG_SETTINGS_D_REMOTE_09":"확인",
   "ST_CAPT_REMOTE":"BitTorrent 원격",
   "STATUS_REMOTE_01":"사용 가능",
   "STATUS_REMOTE_02":"접속 중..",
   "STATUS_REMOTE_03":"사용 불가",
   "STATUS_REMOTE_04":"등록 실패",
   "STATUS_REMOTE_05":"BitTorrent 원격을 쓰려면 암호를 반드시 넣어야 합니다",
   "STATUS_REMOTE_06":"BitTorrent 원격 서비스에 접속할 수 없음",
   "STATUS_REMOTE_07":"다른 컴퓨터에서 이 아이디를 쓰고 있습니다.",
   "STATUS_REMOTE_08":"아이디에는 영·숫자 및 일부 특수기호만 넣을 수 있습니다",
   "STATUS_REMOTE_09":"암호에는 영·숫자 및 일부 특수기호만 넣을 수 있습니다",
   "STATUS_REMOTE_10":"상태: "
}