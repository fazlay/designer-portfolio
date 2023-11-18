type FormDataType = {
  "name": string,
  "business_email":string,
  "phone": string,
  "website": string,
  "contact_reason":string ,
  "message": string,
  "offer_newsletter": boolean,
  "type":string
}
export default FormDataType

export type ClientOrderType = {
  _id: string;
  serviceTitle: string;
  orderDetails: string;
  orderBy: string;
  orderStatus: "pending" | "completed" | "requested" | "rejected" ;
  orderAmount: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
};

 export type ListDataType<T> = {
  meta: {page: number, limit: number, total: number};
  data: T[];
 }