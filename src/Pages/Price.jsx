import { FaRobot } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { $api } from "../utils/axios";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import PriceEdit from "../Components/Price/PriceEdit";


export default function Price() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [editModal, setEditModal] = useState(false)
    const [type, setType] = useState(null)
    const [price, setPrice] = useState('')


    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await $api.get('/prices')
            setData(response?.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="p-[15px]">
            <div className="flex items-center justify-between mb-[10px]">
                <h1 className="text-[30px] text-MainColor font-bold">
                    Imtihon narhlari
                </h1>

            </div>
            <div className="Price__wrapper flex items-center justify-between gap-[20px]">
                <div className=" w-full text-center shadow-md duration-500  cursor-pointer p-[15px]  rounded-[10px] border-[2px] border-MainColor hover:shadow-2xl">
                    <div className=" flex items-center justify-between gap-[50px]">
                        <div className="">
                            <FaRobot fontSize={50} />
                            <h3>
                                AI tekshirish narxi
                            </h3>
                        </div>
                        <h3 className="text-[25px] font-bold">
                            {data[0]?.price?.toLocaleString("ru-RU") || 0} uzs
                        </h3>
                    </div>
                    <button onClick={() => { setEditModal(true); setType('ai'); setPrice(data[0]) }} className="bg-MainColor w-full mt-[10px] text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Imtihon narhini o'zgartirish
                    </button>
                </div>
                <div className="text-center w-full  shadow-md duration-500  cursor-pointer p-[15px]  rounded-[10px] border-[2px] border-MainColor hover:shadow-2xl">
                    <div className="flex  items-center justify-between gap-[50px]">
                        <div className="">
                            <IoPersonSharp fontSize={50} />
                            <h3>
                                Ustoz tekshirish narxi
                            </h3>
                        </div>
                        <h3 className="text-[25px] font-bold">
                            {data[1]?.price?.toLocaleString("ru-RU") || 0} uzs
                        </h3>
                    </div>
                    <button onClick={() => { setEditModal(true); setType('human'); setPrice(data[1]) }} className="bg-MainColor w-full mt-[10px] text-[white] rounded-[10px] p-[10px] border-[2px] border-MainColor duration-500 px-[20px] hover:text-MainColor hover:bg-[white]">
                        Imtihon narhini o'zgartirish
                    </button>
                </div>
            </div>
            <PriceEdit refresh={fetchData} isOpen={editModal} onClose={() => setEditModal(false)} type={type} prices={price} />
        </div>
    )
}