import React, { useEffect, useState } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  increment,
} from 'firebase/firestore';
import '../utils/firebaseConfig';
import '@fortawesome/fontawesome-free/css/all.css';

export default function InfoSection() {
  const [reports, setReports] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const reportsCollection = collection(db, 'report');
    const unsubscribe = onSnapshot(reportsCollection, snapshot => {
      const reportList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReports(reportList);
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [db]);

  const handleConfirm = async (id, confirmType) => {
    const actionKey = `reacted-${id}`;
    if (localStorage.getItem(actionKey)) {
      console.log('You have already reacted.');
      return;
    }

    const incrementField =
      confirmType === 'yes'
        ? { isTrue: increment(1) }
        : { isFalse: increment(1) };
    const reportRef = doc(db, 'report', id);
    try {
      await updateDoc(reportRef, incrementField);
      localStorage.setItem(actionKey, confirmType); // Set local storage to prevent further reactions
      // Immediately update local state to reflect the vote
      const newReports = reports.map(report => {
        if (report.id === id) {
          return {
            ...report,
            isTrue:
              confirmType === 'yes' ? (report.isTrue || 0) + 1 : report.isTrue,
            isFalse:
              confirmType === 'no' ? (report.isFalse || 0) + 1 : report.isFalse,
          };
        }
        return report;
      });
      setReports(newReports);
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <div className="text-center mt-24 mx-auto p-10 justify-center items-center">
      <h1 className="font-semibold text-4xl">Data Informasi Pelaporan</h1>
      <p className="pt-3">
        Ini merupakan informasi mengenai <br /> bencana alam yang terjadi
        disekitar
        <br /> lingkungan masyarakat
      </p>
      <table className="border-collapse border border-gray-600 rounded-lg mt-4 mx-auto ">
        <thead>
          <tr>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal">
              No
            </th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-72 text-start">
              Nama Bencana
            </th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-96 text-start">
              Lokasi
            </th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-32 text-start">
              Suara
            </th>
            <th className="border border-gray-400 bg-gray-300 px-4 py-2 font-normal w-24">
              Y/N
            </th>
          </tr>
        </thead>
        <tbody className="text-start">
          {reports.map((report, index) => {
            const reacted = localStorage.getItem(`reacted-${report.id}`);
            return (
              <tr key={report.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {report.disasterType}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-blue-500 underline">
                  <a
                    href={report.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {report.location}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Setuju : {report.isTrue || 0} Tidak : {report.isFalse || 0}
                </td>
                <td className="px-4 py-4 flex items-center">
                  {reacted ? (
                    <i className="fas fa-lock text-gray-500"></i> // Show lock icon if reacted
                  ) : (
                    <>
                      <button
                        onClick={() => handleConfirm(report.id, 'yes')}
                        className="mr-2 text-green-500 p-2 rounded inline-flex items-center justify-center hover:bg-green-100"
                        aria-label="Like"
                      >
                        <i className="fas fa-thumbs-up"></i>
                      </button>
                      <button
                        onClick={() => handleConfirm(report.id, 'no')}
                        className="text-red-500 p-2 rounded inline-flex items-center justify-center hover:bg-red-100"
                        aria-label="Dislike"
                      >
                        <i className="fas fa-thumbs-down"></i>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </div>
  );
}
