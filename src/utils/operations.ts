import { ref, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

import { database } from '@/utils/firebase';

const createOrUpdateRecord = (
  path: string,
  data: any,
  id?: string | undefined
) => {
  // create or update a record and return the set of functions and values for firebase

  if (id) {
    update(ref(database, `${path}/${id}`), data);
    return id;
  }

  const newId = uuidv4();
  const newData = { ...data, id: newId };
  update(ref(database, `${path}/${newId}`), newData);
  return newId;
};

export { createOrUpdateRecord };
