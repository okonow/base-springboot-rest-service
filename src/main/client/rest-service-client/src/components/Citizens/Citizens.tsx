import { useNavigate } from "react-router-dom";



export const Citizens = () => {
  
  const navigate = useNavigate();
  const gotoMain = () => navigate('/rating');
    return <>
      <p>Citizens</p>
    </>;
}
