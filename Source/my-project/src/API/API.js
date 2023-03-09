import { Altura } from '@altura/altura-js';

const altura = new Altura();

export async function getCollections() {
  try {
    const response = await altura.getCollections(
      {
        perPage: 10,
        page: 1,
        sortBy: 'name',
        sortDir: 'asc',
      },
      {
        isVerified: true,
      }
    );
    return response.collections;
  } catch (error) {
    throw new Error('Failed to fetch collections');
  }
}
