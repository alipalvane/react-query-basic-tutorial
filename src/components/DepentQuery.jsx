import { useQuery } from "react-query";
import axios from "axios";

const fetchUserEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCourseByChannel = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DepentQuery = ({ email }) => {

  const { data: user } = useQuery(["user", email], () => fetchUserEmail(email));
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCourseByChannel(channelId), {
    enabled: !!channelId,
  });
  return <div>DepentQuery</div>;
};

export default DepentQuery;
