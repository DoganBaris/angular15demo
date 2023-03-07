import { Client } from "./clientModel";


export interface Login {
  RememberMe: boolean;
  DomainType?: any;
  Domain: string;
  UserName?: string;
  Password?: string;
  Client: Client;
}