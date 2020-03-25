# TIL

# AI

## 1강

Machine Learning vs Big Data

Machine Learning vs Data Mining

머신런닝은 비정형데이터 분석가능!

Machine Learning 은 AI의 일부분!

Machine Learning vs Statistics

데이터가 훼손된 경우의 통계학의 한계를 극복하기 좋음



#### Major Problem Formulations in ML

- **Supervised Learning**

- **Unsupervised Learning**

- **Representation Learning**

- **Reinforcement Learning**



##### Supervised Learning(지도학습) - 정답이 주어진 데이터

- Training  => Testing

- Testing 을 통해 질문과 Classification로 정답에 근접해 나간다!

- Decision Trees 각 항목에 할당된 내용을 보고 tree구조로 나눠서 비어있는 칸의 내용을 예측!



##### Unsupervised Learning(비지도학습) - 정답이 안주어진 데이터

- The Unlabelled Images - 컴퓨터가 비슷한 이미지를 구분해서 분류하는 방법

- K-means clustering - x축 y축을 비슷한 항목의 값을 가진 그룹으로 나눠서 구분

- DB Scan - 임의의 데이터 포인트에서 bfs와 같이 접근해서 가장 가까운거를 찾아나가 그룹으로 묶는다.



##### Representation Learning

차원을 나눠서 원하는 것을 찾는다.



#### Famous AI system

- CyberTimes - IBM
- DARPA Urban Challenge Team MIT - 도시형 자율주행 대회
- IBM Watson - 퀴즈쇼 출현

- AlphaGo
- AlphaGo Zero

- Google Duplex - 구글에서 미장원에 예약했던 그녀석!

- Visual Intelligence - 숫자 확인, 이미지 확인

- Language Intelligence - Q&A 등등

- Europarl Corpus - Machine Translation 번역
- GLUE Benchmark - 9개의 detail한 task 2019 ??



**소감**

어떠한 분야에 인공지능이 쓰이고 있는지 또한 어떤 방식의 인공지능의 데이터 분석방법이

있는지에 대해서 알 수 있었습니다. 그리고 헷갈리는 다른 분야와 AI의 차이에 대해서 알 수 있었습니다.





## 인공지능 2강

### Linear Regreession(Supervised Learning)

선형 modeling

비선형 modeling



Multivariate linear regression - x, y, z 축등 3차원 형태로 나올 수도 있음

너무 정확하게 맞추려하다 Curve가 많이 발생하는 overfit가 생길 수 있음

Ridge Regression 을 통해 Regularization을 해서 조금 더 심플하게 그래프를 만든다.



**소감**

선형 모델링이 인공지능 구조에서 어떻게 적용될 수 있고 어떤 문제가 있는지와

어떻게 해야지 보완해서 만들 수 있는지에 대해서 알 수 있었습니다.



## 인공지능 3강

### Naive Bayes Classifier (모형)

Features ( 성질, data detail)

##### Problems

- Digit Recognition

- Email spam filtering

- How would you do this?

사진을 통해서

​	남자

아이, 패션 - 사진의 특징을 고려해서 결혼했을 확률 계산



Digit Recogzier  - 각 픽셀을 보고 위치를 feature로 잡고 확률 계산

P(Y) uniform distribution - 각 확률이 일정함

P(Y) Non-Uniform distribution - 지역 전화번호 (각 항목당 일정하지 않은 확률)

Parameter Estimation - Pml = count(x) / total samples



조건부확률

P(A|B): B의 조건에서 A일 확률

P("free"|SPAM): 스팸일 때 free라는 단어가 나와있을 확률



Overfitting 문제

학습데이터에서는 존재하지 않지만 test에서 전혀 없던 0의 확률이 발생해서 확률이 증발할 수 있음

(3이라는 숫자옆에 .이 찍히는 등)



Hyperparameters 위와 같은 경우를 제거하기 위해서 모든 항목에 적절한 k값을 더해주는 값

training data:  cpt, w 학습을 위함

held-out: validation 람다, k를 찾기위함

test data: 원하는 결과를 위함



Baselines 기준이 되는 선



**소감**

인공지능을 파악하기 위해서 어떤 모형을 이용하고 어떤 방식으로 문제를 이해하고

해결해 나가는지 알 수 있었고 통계학이 어떻게 적용되고 있는지 알 수 있었고 식을 풀어서

이해해볼 수 있었습니다.



## 인공지능 4강

### Deep Natural Language Processing (NLP)

Word => Sentence => Document Embedding

Word 하나를 dimension으로 생각하면 각 Document에서 벡터로 표현할 수 있고

Document에서 각 Word를 빈도수로 표현할 수 있다.

Neuron Network - 사람이 단어를 인지하는 방법 - 비슷한 단어들을 묶어두고 생각함

man - king

woman - queen

fast -> faster -> fastest



word vector

Out-of-vocabularies: Unseen words

​	Morphologically rich languages: 예쁜, 예쁘다, 예쁨, 예뻤다



Contextualized Work Embedding: 단어가 어떤 문맥에서 나왔는지까지 이해해서 의미를 이해하는 방식

다음 단어로 가도 이전의 단어의 의미가 남아있고 단어가 지나갈수록 이전 단어의 가치가 줄어든다.

따라서 긴 문장에 대해서는 약한 점이 있다.



"Transformers" as a Bidirectional Language Model

단어의 위치가 아니라 다른 단어와의 관계에 의해서 문맥을 이해하는 방식



**소감**

인공지능이 이해하는 단어 이해 방법과 그 관계에 대해서 생각해 볼 수 있었습니다.

그리고 어떤 방식으로 활용하는지 알아볼 수 있는 시간이었습니다.

word vector나 Contextualized Work Embedding에 대해서 알아볼 수 있었지만 

완벽하게 이해하기에는 부족한 내용이었던 것 같습니다.



## 빅데이터 1강

### 클러스터링(Clustering)

데이터를 유사도에 따라서 정리할 수 있다.

클러스터링 하는 이유 => 추천 시스템을 구현하기 위해서!

ex) 

백화점 고객을 구매 상품에 따라서 클러스터링

추천 시스템에 의해 고객의 과거 패턴을 클러스터링

Gene 데이터를 유사도에 따라서 클러스터링

텍스트 문서들을 주제에 따라서 클러스터링



클러스터 마다 평균점과 각 포인트의 차이를 제곱해서 더하게 되면 어떤 값이 더 의미있는 지 판단할 수 있는 자료로 사용할 수 있다.



#### K-means Clustering

k개의 평균점

단점

K의 사이즈가 크거나 작으면 찾기 힘들다.

밀집도가 높으면 찾기 어렵다.

아주 먼 값을 가진 값이 한개 있다면 평균점이 치우쳐저 잘못된 값을 가져온다.



#### Hierarchical Clustering

모든 포인트가 독립적인 포인트로 시작해서 모든 쌍의 거리를 계산하고 가장 가까운 포인트를 서로 묶는다. 이런식으로 한개씩 merge하다가 원하는 갯수 K가 되면 멈춘다.

average link - 평균점을 기준

complete link - 최대거리를 기준



#### DBSCAN Clustering 

거리를 주면 특정 점에서의 거리 안에 있는 값들을 넣어서 하나의 클러스터링으로 만든다.  새로 들어온 값도 정해진 거리를 확인해서 묶고 반복해서 여러개의 개체를 묶고 클러스터링을 만든다.



**소감**

클러스터링이란 무엇인지 어떠한 방식의 클러스터링 방식이 있는지에 대해서 알 수 있는 시간이었습니다.



## 빅데이터 2강

### 데이터마이닝

Generative model(생성 모델)

likehood가 가장 높은 값을 가져오는 것

#### EM clustering

생성모델의 파라미터를 찾아서 확률을 찾아 클러스터링을 묶는 방법



#### Probabilistic Latent Semantic Indexing (PLSI)

k개의 주제가 있으면 사람마다 선호하는 주제가 다른데 이 때 하나의 주제를 고르고 주제안의 단어의 확률을 확인하고 그 중 하나를 랜덤하게 골라서 글을 적습니다.

##### 추천 시스템

**Content based filtering method** = item들의 유사도를 이용해서 추천함

**Collaborative filtering method** = 비슷한 유저끼리는 동일하게 행동한다는 가정에 의해서 추천

**Matrix Factorization method** = 가로에 item 세로에 user를 넣고 연관지어서 추천하는 방법 (영화정보)



**소감**

각 클러스터링 알고리즘의 함수들을 한번씩 설명해주는데 식을 처음부터 풀어서 나오는게 아니라 이미 나오는 식을 설명해주는 방식이라 이해하기 어려웠습니다.



## 블록체인 1강

블록체인 - 신뢰를 만드는 기계!

모든 컴퓨터에 저장되는 장부 - 집단지성

무결성을 유지하는 분산형 거래시스템

**핵심기술**

- 스마트 컨트랙트

- 합의 알고리즘

- 파일매니저

- 암호화

- P2P 네트워크



비즈니스 도메인 활성화 코인

steemmit - 게시물을 올리면 환전 가능한 암호화 화폐를 주는 시스템

filecoin - 콘텐츠를 탈중앙화 시키고 인센티브를 통해 네트워크가 운영되는 클라우드 스토리지 서비스

IoTA - 사물인터넷과 블록체인을 융합한 새로운 플랫폼(M2M Payment)



비금융권 응용 분야

인증/관리 - 전자문서관리, 인증권한관리, 디지털 신분증

자산거래 - 부동산 거래시장, 다이아몬드 인증/거래, 금/은 거래

기타 - 예측 시장, 온라인 투표, 개인 의료 정보, IOT, 디지털 콘텐츠 소유권



공유경제 사회의 인프라 역할을 하게되는 블록체인 기술



디지털 세상의 특징

- 분할 및 병합
- 시공간 초월
- 자동화



**소감**

블록체인이 우리의 산업과 사회에 어떠한 영향을 미칠지에 대해서 알게 되었습니다.  또한 기본적인 원리에 대해서도 알 수 있었습니다.



## 블록체인 2강

### 이더리움의 이해

##### 이더리움

공개형 블록체인 => 데이터를 쌓는것이 아니라 상태변화를 도입함.

암호화 알고리즘을 활용 => 무작위로 상태전이가 일어나는 것을 방지

모든 참여자가 동일한 상태를 공유

블록은 해당 시점의 이더리움의 상태를 나타낸다고 볼 수 있음

###### 이더리움 계정의 종류

- 외부 소유 계정

ETH 잔액 유지

개인 키를 통한 주소 관리

ETH 전송, 컨트랙트 실행을 위한 거래 전송 가능

컨트랙트 코드를 가지고 있지 않음

거래나 메시지를 수신하면 보유하고 있는 컨트랙트 코드를 실행

- 컨트랙트 계정

ETH 잔액 유지

주소를 가지고 있으나 개인키는 존재하지 않음

컨트랙트 코드를 보유

###### 이더리움의 구성요소

- 상태(STATE)

  어느 한 시점에 대한 Ether의 잔액, 기타 정보를 담고있는 계정들의 집합

- 이더리움의 상태 전이(State Transition)

  블록채굴로 인한 거래 내역 추가 시 상태 전이 발생

- 블록

  이더리움 장부에 기록되는 데이터의 기본 단위



이더리움 스마트 컨트랙트

가스(gas) : 이더리움을 움직이게 하는 '기본 단위'



##### 이더리움 가상 머신

이더리움 스마트 컨트랙트를 실행하기 위한 가상머신

특징

- 튜링 완전 머신, 스택 기반 구조, 32 Byte의 메모리
- 이더리움 주소 연산 (160bit), 256bit 암호화 알고리즘 등 이더리움 관련 구조 연산에 최적화

모든 동작을 수행하기 위해서는 사전에 가스가 지불되어야 함

- 이는 Dos(Denial of Service) 공격을 방지하기 위함

  

##### 솔리디티 개요

이더리움 스마트 컨트랙트 언어의 ㅈ오류

- 가장 많이 활용되는 언어
- Java와 유사한 문법을 가짐

특징

- 객체지향 언어

  Class = Contract

  Object instance ~ EVM에 배포된 스마트 컨트랙트

- 정적 타입언어

  다음 노드의 주소를 저장하는 자료구조



**소감**

기존에 알고 있던 블록체인의 기능을 가지고  있는 이더리움이란 무엇인지 어떻게 활용되고 있는지에 대해서 알 수 있었습니다. 