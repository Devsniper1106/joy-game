"use server";

import { MOCK_GAME_ITEM_LIST_PATH } from "@/lib/config";
import { TGameItemDto } from "@/lib/types/api/model/game";
import { TResponseDto } from "@/lib/types/api/rest/response";

export const getGameList = async (): Promise<TResponseDto<TGameItemDto[]>> => {
  const resp = await fetch(MOCK_GAME_ITEM_LIST_PATH, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
  if (!resp.ok) {
    return { success: false, code: resp.status };
  }
  const mockGameList: TGameItemDto[] = await resp.json();
  return {
    success: true,
    data: mockGameList,
    code: 200,
  };
};
