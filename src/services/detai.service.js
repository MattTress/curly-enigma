import { requestDELETE } from "../utils/requestDETELE";

export const deleteTopicById = (id) => {
      return requestDELETE(`/api/topic/${id}`, {
        method: "delete",
      });
    };