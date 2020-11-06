import axios from "axios";

class Galleries {
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/api";
    axios.interceptors.request.use(function(config) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authoratization = "Bearer " + token;
      }
      return config;
    });
  }
  async getAll() {
    const response = await axios.get('/galleries')

    return response.data;
  }
  async yourGalleries() {
    const response = await axios.get('/your-galleries')

    return response.data
}


  add(data) {
    return axios.post("/galleries", data);
  }

  addComment(data, id) {
    return axios.post(`/galleries/${id}/comments`, data)
}

deleteComment(id) {
  return axios.delete(`/comments/${id}`)
}

deleteGallery(id) {
    return axios.delete(`/galleries/${id}`)
}

async getOne(id) {
  const { data } = await axios.get(`/galleries/${id}`);
  return data;
  }
}

export const galleries = new Galleries();
