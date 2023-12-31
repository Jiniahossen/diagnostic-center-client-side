import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useBlocked = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isBlocked, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isBlocked'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/blocked/${user.email}`);
            // console.log(res.data);
            return res.data?.blocked;
        }
    })
    return [isBlocked, isAdminLoading]
};

export default useBlocked;