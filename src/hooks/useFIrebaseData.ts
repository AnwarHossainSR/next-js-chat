/* eslint-disable no-console */
import type { DataSnapshot } from 'firebase/database';
import { get, off, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

import { database } from '@/utils/firebase'; // Import the database reference from firebase.ts

// Custom hook for fetching data from Firebase Realtime Database
const useFirebaseData = <T>(path: string): T[] | null => {
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(ref(database, path));
        const snapshotValue = snapshot.val();
        if (snapshotValue) {
          const dataArray = Object.values(snapshotValue) as T[];
          setData(dataArray);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [path]);

  return data;
};

// Custom hook for subscribing to real-time updates from Firebase Realtime Database
const useFirebaseRealtimeData = <T>(path: string): T[] | null => {
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    const handleData = (snapshot: DataSnapshot) => {
      const snapshotValue = snapshot.val();
      if (snapshotValue) {
        const dataArray = Object.values(snapshotValue) as T[];
        setData(dataArray);
      } else {
        setData([]);
      }
    };

    const subscribeToData = () => {
      try {
        onValue(ref(database, path), handleData);
      } catch (error) {
        console.log('Error subscribing to data:', error);
      }
    };

    subscribeToData();

    // Clean up the subscription
    return () => {
      off(ref(database, path));
    };
  }, [path]);

  return data;
};

export { useFirebaseData, useFirebaseRealtimeData };
