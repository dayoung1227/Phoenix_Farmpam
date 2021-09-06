package com.phoenix.farmpam.board.service;

import com.phoenix.farmpam.board.dto.BoardDto;
import com.phoenix.farmpam.board.dto.LikesDto;

public interface BoardService {
	public BoardDto likesInsert(LikesDto likesDto);
	public BoardDto likesDelete(LikesDto likesDto);
}
