export enum QUERY_KEYS {
  FETCH_ALL_MESSAGE = 'fetchAllMessage',
  CLIENT_ORDER = 'clientOrder',
  CLIENT_LIST= 'clientList',
  USER_DETAILS = 'userDetails',

}

export enum ORDER_STATUS {
  PENDING = 'pending',
  REQUESTED = 'requested',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export enum USER_ROLES {
  ADMIN = 'admin',
  CLIENT = 'client',

}