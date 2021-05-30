import { Job } from "./job";

export type OrderTerm = keyof Omit<Job, "id">;
