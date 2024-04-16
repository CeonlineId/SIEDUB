import { useNavigate } from 'react-router-dom';

export default function ReportButton() {
  let navigate = useNavigate();
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => navigate('/lapor')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Laporkan
      </button>
    </div>
  );
}
