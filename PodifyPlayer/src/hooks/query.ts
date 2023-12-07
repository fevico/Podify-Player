import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import client from "@src/api/Client";
import catchAsyncError from "@src/api/catchError";
import { updateNotification } from "@src/store/notification";
import { AudioData } from "@src/@types/audio";

const fetchLatest = async(): Promise<AudioData[]> =>{
    const {data} = await client('/audio-latest')
    return data.audios
 }

export const useFetchLatestAudios = () => {
    const dispatch = useDispatch()

    return useQuery(['latest-uploads'], {
        queryFn: () => fetchLatest(),
        onError(err) {
            const errorMessage = catchAsyncError(err)
            dispatch(updateNotification({message: errorMessage, type: 'error'}))
        },
    });
}