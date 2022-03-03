import Http from "Utils/Http";

export const getNotificationsService = () => Http.get("/notifications");

export const markAsReadService = (id) => Http.post(`/notifications/${id}`);

export const clearAllNotificationsService = () => Http.delete("/notifications");
