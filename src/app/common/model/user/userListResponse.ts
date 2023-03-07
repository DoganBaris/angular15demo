

  export interface Identity {
      Type: string;
      Number?: any;
      Nationality?: any;
      BirthDate?: any;
      BirthPlace?: any;
      MothersName?: any;
      FathersName?: any;
      MaidenName?: any;
      MothersMaidenName?: any;
      FamilyOrderNumber?: any;
  }

  export interface Info {
      Profession?: any;
      IsFirm: boolean;
  }

  export interface Person {
      Name: string;
      FirstName: string;
      MiddleName?: any;
      LastName?: any;
      Gender?: any;
      Identity: Identity;
      Info: Info;
      Id: number;
      UId: string;
      Type: string;
      State: string;
  }

  export interface UserListResponse {
      Reference?: any;
      PartyRoleUId: string;
      Groups?: any;
      Role: string;
      AuthType: string;
      AuthAccount?: any;
      EmailConfirmed: boolean;
      PhoneConfirmed: boolean;
      LockoutEnabled: boolean;
      LockoutEnd?: any;
      AccessFailedCount: number;
      ForceChangePassword: boolean;
      LastAccessDate: Date;
      LastPasswordChangeDate: Date;
      Id: number;
      UId: string;
      Type: string;
      Name: string;
      State: string;
      Person: Person;
  }

