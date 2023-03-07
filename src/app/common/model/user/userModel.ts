import { Profile } from "../login/profileModel";


export interface User {
    UserId: number;
    UserName: string;
    UserRole: string;
    UserPartyId: number;
    UserPartyType: string;
    DomainId: number;
    DomainCode: string;
    DomainName: string;
    DomainType: string;
    DomainRole: string;
    DomainPartyId: number;
    DomainPartyType: string;
    Name: string;
    FirstName: string;
    LastName?: any;
    Profile: Profile;
    StaffId?: any;
    StaffCode?: any;
    History?: any;
}