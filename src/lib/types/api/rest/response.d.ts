export type TResponseDto<T> = {
  success: boolean;
  message?: string;
  data?: T;
  code: number;
};
