export interface incident {
  UserID?:string;
  LawID?:string;
  PublicID?:string;
  Subject: string;
  Other:string;
  PhoneNo: string;
  Street:string;
  City:string;
  ZipCode:number;
  Incident_Des: string;
  Incident_Date:string;
  UploadDate: string;
  IncidentPicture?:string;
  productImage:[];
}
