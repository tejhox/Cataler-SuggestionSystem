import AdminContentLayout from "@/components/Layout/AdminDashboardLayout";
import { useAllStateContext } from "@/context/AllStateContext";
import { useModalFunctionContext } from "@/context/ModalFunctionContext";
import { useSuggestionDataContext } from "@/context/SuggestionDataContext";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";

const AdminDisapproveSuggestionView = () => {
  const {
    allSuggestion,
    isModalAdminSuggestionDetailOpen,
    isModalSuggestionDeleteOpen,
    setIsModalAdminSuggestionDetailOpen,
    isModalStatusDetailOpen,
  } = useAllStateContext();
  const { getSuggestionById } = useSuggestionDataContext();
  const {
    modalDeleteSuggestion,
    modalAdminSuggestionDetail,
    modalStatusDetail,
  } = useModalFunctionContext();

  return (
    <table className="table mt-1">
      <thead>
        <tr>
          <th className="text-center">No</th>
          <th>NIK</th>
          <th>Nama</th>
          <th>Judul</th>
          <th className="text-center">Tanggal</th>
          <th className="text-center">Status</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {allSuggestion
          .filter((item) => item.status === "Disapprove")
          .map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="text-center ">{index + 1}</td>
              <td>{item.userNik}</td>
              <td>{item.userName}</td>
              <td>{item.title}</td>
              <td className="text-center ">
                {format(new Date(item.date), "dd/MM/yyyy")}
              </td>
              <td className="text-center">
                <div
                  className={`badge ${
                    item.status === "ACC"
                      ? "badge-primary"
                      : item.status === "Disapprove"
                      ? "badge-accent"
                      : "badge-secondary"
                  }`}>
                  {item.status}
                </div>
              </td>
              <td className="text-center">
                <button
                  onClick={() => {
                    setIsModalAdminSuggestionDetailOpen(true);
                    getSuggestionById(item.id);
                  }}
                  className="btn btn-sm">
                  <FontAwesomeIcon icon={faUserPen} />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default AdminDisapproveSuggestionView;
