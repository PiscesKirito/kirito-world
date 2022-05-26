import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/slices/HomeSlice";
import { useAppSelector } from "../../redux/store";
import "./index.scss";

function Home() {
  const navigate = useNavigate();
  const user = useAppSelector(getUser);

  useEffect(() => {
    if (user === "") {
      navigate("/login");
    }
  });
  return <div />;
}

export default Home;
