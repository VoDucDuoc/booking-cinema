import React, {useEffect} from "react";
import HomeTools from "../../components/homeTools";
import FilmBlock from "../../components/filmBlock";
import ShowTime from "../../components/showTime";
import { useDispatch } from "react-redux";
import { getFilmList } from "../../actions/filmAction";
import { getCinemaList } from "../../actions/cinemaAction";
import CarouselHome from "../../components/carousel";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    //call API lấy danh sách phim
    dispatch(getFilmList());
    dispatch(getCinemaList());
  }, []);
  return (
    <div>
    
      <CarouselHome/>
   
      <HomeTools/>
      
      <FilmBlock/>
      <ShowTime/>

    </div>
  );
}
