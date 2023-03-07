import { User } from "../user/userModel";
import { BaseResponse } from "../baseResponse";

export interface LoginResponse extends BaseResponse {
  User: User;
  Token: string;
  Expires: Date;
  Validity: Date;
}