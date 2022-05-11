---
title: ubuntu MySQL
date: 2021
---

# ubuntu MySQL 설치 및 관리

## 설치 전 패키지 업데이트
- 패키지 정보 업데이트 : sudo apt updata
- 패키지 정보 업그레이드 : sudo apt upgrade


## mysql 서버 작동 명령
- 상태확인 : sudo service mysql status
- 시작 : sudo service mysql start
- 재시작 : sudo service mysql restart
- 종료 : sudo service mysql stop


## ubuntu에서 mysql 설치 및 관리
- mySQL 서버 설치 : sudo apt install mysql-server
- 실행 상태 확인 : service mysql status
    - active (running) 상태 확인!
- 실행 상태가 아니면 실행 시작 : sudo service mysql start


## mysql root 계정 활성화
*순서대로 명령어 입력
- USE mysql;
- UPDATE user SET plugin='mysql_native_password' WHERE User='root';
- FLUSH PRIVILEGES;
- exit;


## 비밀번호 설정
- 신규 등록 : mysqladmin -u root password
*비밀번호 보안 상 입력 상태가 보이지 않음. 틀릴 경우 다시 명령 실행이 좋음.
- 변경 : mysqladmin -u root -p password
*비밀번호 보안 상 입력 상태가 보이지 않음. 틀릴 경우 다시 명령 실행이 좋음.


## MySQL 백업과 복구
### 백업1
> mysqldump -u root -p --databases 데이터베이스이름  > 데이터베이스저장이름.sql
>> ☞ 복구 SQL 명령 데이터를 출력 리다이렉트(>)를 통해 sql 파일 형태로 저장

#### 예시
department.sql 백업
```
$ mysqldump -u root -p --databases department > department.sql
```

### 백업2
> mysqldump -u root -p --databases 데이터베이스이름 | gzip > 데이터베이스저장이름.sql.gz
>> ☞ 복구 SQL 명령 데이터를 출력 리다이렉트(>)를 통해 sql 파일을 압축한 형태로 저장

#### 예시
department.sql 백업
```
$ mysqldump -u root -p --databases department | gzip > department.sql.gz
```

### 복구1
> mysql -u root -p &lt; student2.sql
>> ☞ sql 파일을 이용하여 입력 리다이렉트(&lt;)를 통해 데이터베이스 복구(비번 입력 필요)

#### 예시
department.sql 복구
```
$ mysql -u root -p &lt; department.sql
```

### 복구2
> gunzip -c 데베.sql.gz | mysql -u root -p
>> ☞ 압축된 파일을 이용하여 파이프(|)를 통해 데이터베이스 복구(비번 입력 필요)

#### 예시
department.sql 복구
```
$ gunzip -c department.sql.gz | mysql -u root -p
```


## 데이터베이스 삭제
*순서대로 명령어 입력
- mysql -u root -p(비번 입력 필요)
- show databases;
- drop database 데이터베이스이름;
- exit;
