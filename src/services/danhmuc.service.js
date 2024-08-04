import request from "../utils/request";

// ======================== Fields =================================
export const createField = (params) => {
  return request("/api/field", {
    method: "post",
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getFieldById = (id) => {
  return request(`/api/field/${id}`, {});
};

export const updateField = (id, params) => {
  return request(`/api/field/${id}`, {
    method: "PUT",
    params,
  });
};

export const deleteFieldById = (id) => {
  return request(`/api/field/${id}`, {
    method: "delete",
  });
};

// ======================== Course =================================

export const createCourse = (params) => {
  return request("/api/course", {
    method: "post",
    params,
  });
};

export const getCourseById = (id) => {
  return request(`/api/course/${id}`, {});
};

export const updateCourse = (id, params) => {
  return request(`/api/course/${id}`, {
    method: "PUT",
    params,
  });
};

export const deleteCourseById = (id) => {
  return request(`/api/course/${id}`, {
    method: "delete",
  });
};

// ======================== class =================================

export const createClass = (params) => {
  debugger;
  return request("/api/class", {
    method: "post",
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getClassById = (id) => {
  return request(`/api/class/${id}`, {});
};

export const updateClass = (id, params) => {
  return request(`/api/class/${id}`, {
    method: "PUT",
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteClassById = (id) => {
  return request(`/api/class/${id}`, {
    method: "delete",
  });
};
