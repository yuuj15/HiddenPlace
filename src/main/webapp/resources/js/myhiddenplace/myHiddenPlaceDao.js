//myHiddenPlace dao 객체
function MyHiddenPlaceDao() {

//	내알못 best 4 요청 dao 메서드
	this.bestMHP = function(nowLoginId) {
		
		var myHiddenPlaces = [];

		try{

			/*$.ajax({
				url: '/myhiddenplace/bestMHP' , //홈페이지 불러올 주소
				async : false, //false: 동기, true: 비동기
				type: 'get', //요청방식 get or post      
				data: {
					userId : nowLoginId//보내줄 데이터 없으면 비어둬도되고 data 아에 없애도 되고
				},
				dataType: 'xml', //서버에서 보내오는 데이터 타입
				success: function (data) { //서버에서 보내오는 데이터
				
					$(data).find('myHiddenPlace').each(function() {
						var myHiddenPlace = {
							num:$(this).find('num').text(), //글번호
							userNickname:$(this).find('userNickname').text(), //작성자
							writeDate:$(this).find('writeDate').text(), //작성일자
							readCount:$(this).find('readCount').text(), //추천수
							imageUrl:$(this).find('imageUrl').text(), //이미지경로
							bookmark:$(this).find('bookmark').text(), //즐겨찾기 여부 0or1 현재 로그인한 userId가 즐겨찾기한 게시글인경우 1 리턴, userId가 null값(로그인x)이 넘어갈 경우도 생각
							title:$(this).find('title').text() //글제목
						}					
						
						myHiddenPlaces.push(myHiddenPlace);
					});
				}
			});*/
			
			var myHiddenPlace1 = {
					num:1, //글번호 hidden으로할거임
					userNickname:"이동진", //유저닉네임
					writeDate:20161206, //작성일자
					readCount:1, //조회수
					imageUrl:"../../../resources/bootstrap/img/camera.jpeg", //이미지 경로
					bookmark:1, //북마크 여부 0or1
					title:"ㅎㅎㅎ" //글제목
			}
			
			var myHiddenPlace2 = {
					num:2, //글번호 hidden으로할거임
					userNickname:"이동진", //유저닉네임
					writeDate:20161206, //작성일자
					readCount:1, //조회수
					imageUrl:"../../../resources/bootstrap/img/camera.jpeg", //이미지 경로
					bookmark:1, //북마크 여부 0or1
					title:"ㅎㅎㅎ" //글제목
			}
			
			var myHiddenPlace3 = {
					num:3, //글번호 hidden으로할거임
					userNickname:"이동진", //유저닉네임
					writeDate:20161206, //작성일자
					readCount:1, //조회수
					imageUrl:"../../../resources/bootstrap/img/camera.jpeg", //이미지 경로
					bookmark:1, //북마크 여부 0or1
					title:"ㅎㅎㅎ" //글제목
			}
			
			var myHiddenPlace4 = {
					num:4, //글번호 hidden으로할거임
					userNickname:"이동진", //유저닉네임
					writeDate:20161206, //작성일자
					readCount:1, //조회수
					imageUrl:"../../../resources/bootstrap/img/camera.jpeg", //이미지 경로
					bookmark:1, //북마크 여부 0or1
					title:"ㅎㅎㅎ" //글제목
			}
			
			myHiddenPlaces.push(myHiddenPlace1);
			myHiddenPlaces.push(myHiddenPlace2);
			myHiddenPlaces.push(myHiddenPlace3);
			myHiddenPlaces.push(myHiddenPlace4);
			
			
		} catch(e) {
			console.log('bestMHP Dao 객체 : bestMHP Dao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return myHiddenPlaces;
		
	};
	
//	내알못 조회 dao 메서드
	this.selectOneMHP = function(num) {

		var myHiddenPlace;
		
		try{

			$.ajax({
				url: '/myhiddenplace/selectOneMHP',
				async : false,
				type: 'get',     
				data:{
					num: num	
				},
				dataType: 'json', //서버에서 보내오는 데이터 타입
				success: function (data) { //서버에서 보내오는 데이터
					//alert(JSON.stringify(data));
					myHiddenPlace = data;
				}	
					});	
					
				}catch(e) {
					console.log('selectOneMHP 객체 : selectOneDao 메서드에서 예외 발생');
					console.log(e.message);
				}
				
				return myHiddenPlace;

			};

	

//	추천(좋아요) dao 메서드
	this.upCount = function(upCountCode) {
		alert("dao 도착");
		var isSuccess;
		try {
			$.ajax({
				url: '/', //홈페이지 불러올 주소
				async : false, //false: 동기, true: 비동기
				type: 'get', //요청방식 get or post              
				data: {
					upCountCode : upCountCode
				},
				dataType: 'json', //서버에서 보내오는 데이터 타입
				success: function (data) {
					
					var messageValue =$(data).find('message').text();
					isSuccess = eval('(' + messageValue + ')');
					
				}
			});
			
		} catch(e) {
			console.log('ArticleDao 객체 : saveDao 메서드에서 예외 발생');
			console.log(e.message);
		}
		if(upCountCode==0){
			isSuccess = false;	
		} else {
			isSuccess = true;	
		}
		alert(isSuccess);
		return isSuccess;
		
	};
	
	
//	댓글 추가 dao 메서드
	this.replyInsert = function(nickName, comment) {
		alert("Insertdao 도착");
		var isSuccess;
		try{
			
			$.ajax({
				url: '/' , //홈페이지 불러올 주소
				async : false, //false: 동기, true: 비동기
				type: 'get', //요청방식 get or post      
				data: {
					nickName : nickName,
					comment : comment
				},
				dataType: 'xml', //서버에서 보내오는 데이터 타입
				success: function (data) { //서버에서 보내오는 데이터
					
					$(data).find('myHiddenPlace').each( function(){
						
						var messageValue =$(data).find('message').text();
						isSuccess = eval('(' + messageValue + ')');
						
						});					
						
					}
					
				});
				
		} catch(e) {
			console.log('reply Dao 객체 : replyInsert 메서드에서 예외 발생');
			console.log(e.message);
		}
		
		return isSuccess;
	};
	
	
	//댓글 목록 dao 메서드
	this.replySelectAll = function(num) {
		alert("SelectAlldao 도착");
		var replies = [];	
		try{
			
			$.ajax({
				url: '/' , //홈페이지 불러올 주소
				async : false, //false: 동기, true: 비동기
				type: 'get', //요청방식 get or post      
				data: {
					num: num
				},
				dataType: 'xml', //서버에서 보내오는 데이터 타입
				success: function (data) { //서버에서 보내오는 데이터
					
					$(data).find('replies').each( function(){
						var reply = {
							replyNum:$(this).find('userNickname').text(),
							userNickname:$(this).find('userNickname').text(),
							comment:$(this).find('comment').text()
						}					
						
						replies.push(reply);
					});	
					
				}
			});
			
				
		} catch(e) {
			console.log('replies 객체 : replySelectAll 메서드에서 예외 발생');
			console.log(e.message);
		}

		return replies;
	};
	
	
	//댓글삭제 dao
	this.replyDelete = function(num, replyNum) {
		alert("replyDeleteDao 도착");
		var isSuccess;
		try{

			$.ajax({
				url: '/',
				async : false,
				type: 'get',               
				data: {
					num : num,
					replyNum : replyNum
				},
				dataType: 'xml', //서버에서 보내오는 데이터 타입
				success: function (data) {
					var messageValue =$(data).find('message').text();
					isSuccess = eval('(' + messageValue + ')');
				}
			});

		}catch(e) {
			console.log('ArticleDao 객체 : selectOneDao 메서드에서 예외 발생');
			console.log(e.message);
		}   

		return isSuccess;
	};
		

	//댓글 수정 dao
	this.replyUpdte = function(num, replyNum, updateComment) {
		alert("replyUpdteDao 도착");
		var isSuccess;
		try{

			$.ajax({
				url: '/',
				async : false,
				type: 'get',               
				data: {
					num : num,
					replyNum : replyNum,
					updateComment : updateComment
				},
				dataType: 'xml', //서버에서 보내오는 데이터 타입
				success: function (data) {
					var messageValue =$(data).find('message').text();
					isSuccess = eval('(' + messageValue + ')');
				}
			});

		}catch(e) {
			console.log('replyUpdteDao 객체 : replyUpdteDao 메서드에서 예외 발생');
			console.log(e.message);
		}   

		return isSuccess;
	};
	
	
//	내알못 글쓰기 dao
	this.myHiddenPlaceInsert = function(content,latitude, longitude,mhpStoreName,mhpTitle,mhpThema,mhpTitleImg) {
		
		var isSuccess;
			try {
				$.ajax({
					url : '/myhiddenplace/insertMHP', // 홈페이지 불러올 주소
					async : false, // false: 동기, true: 비동기
					type : 'post', // 요청방식 get or post
					data : {
						
						content : content,
						latitude : latitude,
						longitude : longitude,
						storeName : mhpStoreName,
						title : mhpTitle,
						themeCode : mhpThema,
						titleImgUrl : mhpTitleImg
						
					},
					dataType: 'text', //서버에서 보내오는 데이터 타입
					success: function (data) {

						isSuccess = data; // success
						
					}
				});

			}catch(e) {
				console.log('ArticleDao 객체 : selectOneDao 메서드에서 예외 발생');
				console.log(e.message);
			}   
			
			alert(isSuccess);
			return isSuccess;
		};
		
		

}