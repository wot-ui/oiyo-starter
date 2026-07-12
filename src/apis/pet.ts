/**
 * Pet models & APIs
 * @see https://petstore3.swagger.io/#/pet
 */

export type PetStatus = 'available' | 'pending' | 'sold'

export interface Category {
  id?: number;
  name?: string;
}

export interface Tag {
  id?: number;
  name?: string;
}

export interface Pet {
  id?: number;
  name: string;
  category?: Category;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

export interface FindPetsByStatusQuery {
  status: PetStatus;
}

export interface FindPetsByTagsQuery {
  tags: string[];
}

export interface UpdatePetWithFormQuery {
  name?: string;
  status?: string;
}

export interface UploadPetImageQuery {
  additionalMetadata?: string;
}

export const pet = {
  /** PUT /pet - Update an existing pet */
  updatePet(body: Pet) {
    return client.request<Pet>('/pet', {
      method: 'PUT',
      body,
    })
  },

  /** POST /pet - Add a new pet to the store */
  addPet(body: Pet) {
    return client.request<Pet>('/pet', {
      method: 'POST',
      body,
    })
  },

  /** GET /pet/findByStatus */
  findByStatus(query: FindPetsByStatusQuery) {
    return client.request<Pet[]>('/pet/findByStatus', {
      method: 'GET',
      query,
    })
  },

  /** GET /pet/findByTags */
  findByTags(query: FindPetsByTagsQuery) {
    return client.request<Pet[]>('/pet/findByTags', {
      method: 'GET',
      query,
    })
  },

  /** GET /pet/{petId} */
  getById(petId: number) {
    return client.request<Pet>(`/pet/${petId}`, {
      method: 'GET',
    })
  },

  /** POST /pet/{petId} */
  updateWithForm(petId: number, query?: UpdatePetWithFormQuery) {
    return client.request<Pet>(`/pet/${petId}`, {
      method: 'POST',
      query,
    })
  },

  /** DELETE /pet/{petId} */
  delete(petId: number, apiKey?: string) {
    return client.request(`/pet/${petId}`, {
      method: 'DELETE',
      headers: apiKey ? { api_key: apiKey } : undefined,
    })
  },

  /** POST /pet/{petId}/uploadImage */
  uploadImage(petId: number, filePath: string, query?: UploadPetImageQuery) {
    return client.upload<ApiResponse>(`/pet/${petId}/uploadImage`, {
      filePath,
      name: 'file',
      query,
    })
  },
}
