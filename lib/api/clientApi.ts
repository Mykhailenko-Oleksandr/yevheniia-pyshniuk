import { Feedback } from "@/types/feedback";
import { nextServer } from "./api";
import { User } from "@/types/user";

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

export interface CheckSessionRequest {
  success: boolean;
}

export interface FeedbacksResponse {
  page: number;
  perPage: number;
  totalFeedbacks: number;
  totalPages: number;
  feedbacks: Feedback[];
}

// Auth

export async function register(data: RegisterRequest) {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
}

export async function logout(): Promise<void> {
  await nextServer.post("/auth/logout");
}

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

export async function checkSession() {
  const res = await nextServer.get<CheckSessionRequest>("/auth/refresh");
  return res.data;
}

// Users
export async function getMe() {
  const res = await nextServer.get<User>("/users/me");
  return res.data;
}

// Feedbacks
export async function getFeedbacks(page?: number, perPage?: number) {
  const res = await nextServer.get<FeedbacksResponse>("/feedbacks", {
    params: {
      page,
      perPage,
    },
  });

  return res.data.feedbacks;
}
