<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>/users/loginform.jsp</title>
</head>
<body>
<div class="container">
	<h1> 일반유저 로그인 </h1>
	<form action="${pageContext.request.contextPath}/users/login.do" method="post">
		<c:choose>
			<c:when test="${ empty param.url }">
				<input type="hidden" name="url" value="${pageContext.request.contextPath}/"/>
			</c:when>
			<c:otherwise>
				<input type="hidden" name="url" value="${param.url }"/>
			</c:otherwise>
		</c:choose>
		<div>
			<label for="users_email">아이디</label>
			<input type="text" name="users_email" id="users_email"/>
		</div>
		<div>
			<label for="users_pwd">비밀번호</label>
			<input type="password" name="users_pwd" id="users_pwd"/>
		</div>
		<button type="submit">로그인</button>
	</form>
	<br/>
</div>
</body>
</html>