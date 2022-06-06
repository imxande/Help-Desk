import { useNavigate } from "react-router-dom";

export const history = (endPoint) => {
	return useNavigate(endPoint);
};
