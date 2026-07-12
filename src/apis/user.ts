/**
 * User models & APIs
 * @see https://petstore3.swagger.io/#/user
 */

export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
}

export interface LoginUserQuery {
  username?: string;
  password?: string;
}

export const user = {
  create(body: User) {
    return client.request<User>('/user', {
      method: 'POST',
      body,
    })
  },

  createWithList(body: User[]) {
    return client.request<User>('/user/createWithList', {
      method: 'POST',
      body,
    })
  },

  login(query?: LoginUserQuery) {
    return client.request<string>('/user/login', {
      method: 'GET',
      query,
    })
  },

  logout() {
    return client.request('/user/logout', {
      method: 'GET',
    })
  },

  getByName(username: string) {
    return client.request<User>(`/user/${username}`, {
      method: 'GET',
    })
  },

  update(username: string, body: User) {
    return client.request(`/user/${username}`, {
      method: 'PUT',
      body,
    })
  },

  delete(username: string) {
    return client.request(`/user/${username}`, {
      method: 'DELETE',
    })
  },
}
