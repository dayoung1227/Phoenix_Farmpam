package com.phoenix.farmpam.item.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.phoenix.farmpam.item.dto.ItemDto;
import com.phoenix.farmpam.item.dto.OrdersDto;
import com.phoenix.farmpam.item.service.ItemService;

@Controller
public class ItemController {
	
	@Autowired
	private ItemService service;
	
	//장바구니 구매수량 변경
	@RequestMapping("item/private/cartupdate")
	@ResponseBody
	public Map<String, Object> updateCart(HttpServletRequest request){
		service.updateCart(request);
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("isSuccess", true);
		return map;
	}
	
	//장바구니에서 상품 삭제
	@RequestMapping("item/private/cartdelete")
	@ResponseBody
	public Map<String, Object> deleteCart(HttpServletRequest request){
		service.deleteCart(request);
		Map<String, Object> map=new HashMap<String, Object>();
		// {"isSuccess":true} 형식의 JSON 문자열이 응답되도록 한다.
		map.put("isSuccess", true);
		return map;
	}
	
	//장바구니 목록
	@RequestMapping("/item/private/cart")
	public ModelAndView cartList(HttpSession session, ModelAndView mView) {
		service.getCartList(session, mView);
		mView.setViewName("item/cart");
		return mView;
	}
	
	//장바구니 담기
	@RequestMapping(value = "/item/private/addcart", method = RequestMethod.POST)
	public ModelAndView addCart(HttpServletRequest request, HttpSession session, ModelAndView mView) {
		service.insertCart(request, session);
		mView.setViewName("item/addcart");
		return mView;
	}
	
	//목록
	@RequestMapping("/item/private/list_admin")
	public String getList(HttpServletRequest request) {
		
		service.getList(request);
		
		return "item/list_admin";
	}
	
	//새글 저장 폼
	@RequestMapping("/item/private/insertform")
	public String insertForm() {
		return "item/insertform";
	}
	
	//새글 저장 요청 처리 
	@RequestMapping("/item/insert")
	public ModelAndView authInsert(ItemDto dto, HttpSession session, HttpServletRequest request) {
		//글 작성자는 세션에서 얻어낸다. 
		String farmer_email=(String)session.getAttribute("email");
		//CafeDto 객체에 글 작성자도 담기
		dto.setFarmer_email(farmer_email);
		service.insertItem(dto);
		
		return new ModelAndView("item/insert");
	}	
	
	//ajax 사진 업로드 요청처리
	@RequestMapping(value = "/item/private/ajax_image_upload",
			method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> ajaxImageUpload(HttpServletRequest request,
					@RequestParam MultipartFile image){
		return service.saveImage(request, image);
	}
	
	//수정폼
	@RequestMapping("/item/private/updateform")
	public ModelAndView updateForm(HttpServletRequest request, HttpSession session) {
		service.getInfo(request, session);
		return new ModelAndView("item/updateform");
	}

	//수정반영 요청처리
	@RequestMapping(value = "/item/update", method = RequestMethod.POST)
	public ModelAndView authUpdate(HttpServletRequest request) {
		service.updateItem(request);
		return new ModelAndView("item/update");
	}
	
	//삭제하기
	@RequestMapping("/item/private/delete")
	public String delete(@RequestParam int item_idx, HttpServletRequest request) {
		service.deleteItem(item_idx, request);
		return "redirect:/item/private/list_admin.do";
	}	
	
	
	// 물품 구매 테스트 페이지 요청
	@RequestMapping("/item/test_buy")
	public String testDetailForm() {
		return "item/test_buy";
	}
	
	// 구매 요청 처리
	@RequestMapping(value = "/item/buy", method = RequestMethod.POST)
	public ModelAndView authBuy(HttpServletRequest request,
								@ModelAttribute OrdersDto ordersDto,
								ModelAndView mView)
	{
		mView.addObject("users_email",(String)request.getSession().getAttribute("email"));
		service.buy(ordersDto, mView);
		mView.setViewName("item/buy");
		return mView;
	}
}
