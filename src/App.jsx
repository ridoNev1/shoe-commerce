import "./App.css";
import { getListData } from "actions/productData";
import { useEffect, useState } from "react";
import Carrousel from "components/layouts/Carrousel";
import {
  AiTwotoneStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Button from "components/atom/Button";

function App() {
  const [detailData, setDetailData] = useState({});
  const [imageActive, setImageActive] = useState(0);

  const handleGetListData = async () => {
    await getListData().then((res) => {
      setDetailData(res[0]);
    });
  };

  useEffect(() => {
    handleGetListData();
  }, []);

  return (
    <div className="flex justify-center bg-[#f7f7f7]">
      <div className="w-full min-h-screen max-w-[1200px] gap-[30px] grid grid-cols-[2fr,1fr] mt-[100px]">
        <div>
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <Carrousel
              imageData={detailData?.images || []}
              slideActive={imageActive}
              setSlideActive={setImageActive}
            />
            <p className="text-sm font-semibold text-[#3c3c3c] bg-[#8888888c] p-2 rounded-md max-w-max">
              {imageActive + 1} / {detailData?.images?.length}{" "}
            </p>
          </div>
          <div className="flex space-x-4 items-center mt-4">
            {(detailData?.images || [])?.map((el, index) => (
              <img
                src={el}
                onClick={() => setImageActive(index)}
                key={index}
                alt="carousel-thumbnail-items"
                className={`${
                  index === imageActive ? " border-purple-400" : ""
                } border-[3px] w-[100px] shadow-md h-[100px] object-contain bg-white cursor-pointer rounded-md`}
              />
            ))}
          </div>
        </div>
        <div className="bg-white  max-h-[350px] rounded-lg shadow-lg text-[#3c3c3c]">
          <div className="__bg-gradient-main rounded-tr-lg rounded-tl-lg text-white font-bold pt-2 pb-4 px-3">
            Flash Sale
          </div>
          <div className="p-4 bg-white rounded-tr-lg rounded-tl-lg -mt-3">
            <h1 className="text-2xl font-bold">{detailData?.name}</h1>
            <div className="flex space-x-2 items-center">
              <p className="flex space-x-1 mt-2">
                {[...Array(5)].map((_, index) => {
                  return index + 1 > detailData?.rating ? (
                    <AiOutlineStar color="gray" />
                  ) : (
                    <AiTwotoneStar color="yellow" />
                  );
                })}
                {/*  */}
              </p>
              <p className="text-sm font-semibold mt-1">
                ({detailData?.rating})
              </p>
            </div>
            <h2 className="mt-4 flex items-center space-x-2">
              <span className="font-bold text-3xl text-[#fe5f00]">
                {detailData?.price}
              </span>{" "}
              <span className="bg-red-600 text-white font-bold p-1 px-2 text-xs rounded-lg">
                {detailData?.off}
              </span>
            </h2>

            <div className="mt-4">
              <p className="font-bold text-sm">Size :</p>
              <div className="flex items-center space-x-2 text-xs font-bold  mt-2">
                {detailData?.sizes?.map((el, idx) => (
                  <button
                    key={idx}
                    className="w-[30px] h-[30px] shadow-lg rounded-lg border border-[whitesmoke]"
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t-2 pt-4 flex items-center space-x-3">
              <Button
                label="Add To Cart"
                Icon={<AiOutlineShoppingCart color="white" />}
                variant="bg-[#fe5f00]"
              />
              <Button label="Buy Now" variant="bg-[#4ca85e]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
