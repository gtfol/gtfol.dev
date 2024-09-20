import { DocumentReference } from "firebase/firestore";

export enum ResponseStatus {
  Waiting,
  Ready,
  SuccessfullyAdded,
  SuccessfullyDeleted,
  AddFailed,
  DeleteFailed,
  AlreadyExists,
  NotFound,
  InvalidFormat,
}

export interface Session {
  description: string;
  name: string;
  password: string;
  userIds: Array<string>;
}

export enum ClubPrivacy {
  PUBLIC_CLUB = "public",
  PRIVATE_CLUB = "private",
}

export interface GMClub {
  id: string;
  name: string;
  description: string;
  order: number;
  hour: number;
  minute: number;
  privacy: ClubPrivacy;
  owner: DocumentReference;
  inviteCode: string;
}

export interface GMClubResponse {
  id: string;
  name: string;
  description: string;
  hour: number;
  minute: number;
  privacy: string;
  owner: string;
  inviteCode: string;
}