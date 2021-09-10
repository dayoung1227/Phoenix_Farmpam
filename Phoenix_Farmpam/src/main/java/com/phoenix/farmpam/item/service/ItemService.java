package com.phoenix.farmpam.item.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.phoenix.farmpam.item.dto.ItemDto;
import com.phoenix.farmpam.item.dto.OrdersDto;

public interface ItemService {
	//장바구니 구매수량 변경
	public void updateCart(HttpServletRequest request, Map<String, Object> map);
	
	//장바구니에서 상품 삭제
	public void deleteCart(HttpServletRequest request);
	
	//장바구니 목록 불러오기
	public void getCartList(HttpSession session, Map<String, Object> map);
	
	//장바구니 담기
	public void insertCart(HttpServletRequest request, HttpSession session);		
	
	//아이템 목록 얻어오기
	public void getList(HttpServletRequest request, Map<String, Object> map);
	
	public void insertItem(ItemDto dto, Map<String, Object> map, HttpServletRequest request);
	
	public void getInfo(HttpServletRequest request, HttpSession session, Map<String, Object> map);
	
	public Map<String, Object> saveImage(HttpServletRequest request,
			MultipartFile mFile);
	
	public void updateItem(HttpServletRequest request, Map<String, Object> map);
	
	public void deleteItem(HttpServletRequest request, Map<String, Object> map);

	//상품 주문 페이지 요청
	public void buyForm(HttpServletRequest request, HttpSession session, Map<String, Object> map);

	//상품 주문 처리를 하는 메소드
	public ModelAndView buy(OrdersDto ordersDto, ModelAndView mView);
	
	//상품목록 추가 응답
	public List<ItemDto> moreItemList(HttpServletRequest request);
	
	public List<ItemDto> getList2(HttpServletRequest request);
	
	public void getDetail(ModelAndView mView, int item_idx);
	
	// vue Shopmain 아이템리스트 가져오기
	public void vueGetMainList(Map<String, Object> map, HttpServletRequest req);

	// vue 아이템 정보 가져오기
	public void vueGetInfo(Map<String, Object> map, HttpServletRequest req);

	// vue MyShop 아이템리스트 가져오기
	public void vueGetMyShop(Map<String, Object> map, HttpServletRequest req);
}