import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import like from "../assets/like.png";
import taqqoslash from "../assets/taqqoslash.png";
import { useParams } from "react-router-dom";
import SwipProduct from "./swipper/swpProduct";
import { KarzinkaContext } from "../context/karzinkacontext";
import { TanlanganContext } from "../context/tanlanganContext";

function Dynamicpage2() {
  const params = useParams();

  const [product, setProduct] = useState({});

  const { addBasket } = useContext(KarzinkaContext);
  const { addlike } = useContext(TanlanganContext);

  const onAdd = (item) => {
    addBasket(item);
  };

  const onLike = (item) => {
    addlike(item);
  };


  useEffect(() => {
    getData();
  }, [params.id]);

  const getData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${params.id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dynamic">
      <div className="xit2_kafolat">
        <div className="xit2_kafolat_text">
          <img src="https://idea.uz/img/icons/shield.svg" alt="" />

          <h3>
            Rasmiy kafolat <br />
            barcha mahsulotlar uchun
          </h3>
        </div>

        <div className="xit2_kafolat_text">
          <img src="" alt="" />

          <h3>
            O'zbekiston bo'ylab <br />
            yetkazib berish
          </h3>
        </div>

        <div className="xit2_kafolat_text">
          <h3>
            Eng yaqin do'kondan <br />
            olib ketish
          </h3>
        </div>

        <div className="xit2_kafolat_text">
          <h3>
            Qulay muddatli to'lov <br />
            boshlang’ich to'lovsiz
          </h3>
        </div>
      </div>

      <div className="dynamic2">
        <div className="dynamic_menu">
          <div className="dynamic_text">
            <span>{product.desc}</span> <br />
            <div className="dynamic_text_title">
              <div onClick={() => onLike(product)} className="dynamic_text_title_img">
                <img width={"20px"} src={like} alt="" />
                <h3>tanlanganlar</h3>
              </div>

              <div className="dynamic_text_title_img">
                <img width={"20px"} src={taqqoslash} alt="" />
                <h3>taqqoslash</h3>
              </div>
            </div>
            <div className="dynamic_text_title2">
            <img width={"400px"} src={product.thumbnail} alt="" />

              <div>
                <h2 className="dynamic_mahsulot">Mahsulot haqida qisqacha</h2>

                <div className="dynamic_text_title_span">
                  <span>Displey diagonali, dyuym..........6.79</span>
                  <span>Operativ xotira (RAM), GB....................4</span>
                  <span>O'rnatilgan xotira (ROM), GB................128</span>
                  <span>
                    Asosiy kamera MP..............................50+8+2
                  </span>
                  <span>Akkumulyator quvvati, (mA/s)..........5000</span>
                  <span>
                    SKU..............................................................7367
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="dynamic_text3">
            <h1 className="dynamic_mahsulot">Mahsulot haqida</h1>

            <div>
              <span>
                Yuqori sifatli shisha panelli Xiaomi Redmi 12 bir qarashdayoq
                o‘ziga jalb qiladi. U 6,79 dyuymli FHD+ ekran bilan jihozlangan
                bo‘lib, unda yuqori detallashtirish va keng ranglar palitrasi
                tufayli kontent jozibali ko‘rinadi. Mahsuldorlik kuchli MediaTek
                Helio G88 chipseti tomonidan ta’minlanadi. Uch ob’ektivli kamera
                50 megapikselli o‘lchamga ega va funksiyalari yordamida
                fotosuratlaringiz professional daraja chiqadigan sun’iy
                intellektni qo‘llab-quvvatlaydi. Model orqa panel uchun
                shishadan foydalangan holda viqorli ingichka dizaynda ishlab
                chiqarilgan bo‘lib, bu qurilmaning yuqori sinfga tegishliligiga
                urg‘u beradi. Bundan tashqari, u IP53 standarti bo‘yicha turli
                tomchilar va changdan himoyaga ega, bu esa uskunangizni har
                qanday sharoitda mukammal holatda saqlashga yordam beradi.
                Korpusning og‘irligi 198,5 gramm: bu uni kundalik foydalanish
                uchun qulay, portativ va ko‘p joy talab qilmasligini
                ta’minlaydi. Xiaomi Redmi 12 smartfonining o‘ziga xos xususiyati
                – Bu uning 50 megapikselli sensorga asoslangan uch obyektivli
                kamerasi. Sun’iy intellekt vositalaridan foydalanish hisobiga
                kamera foydalanuvchining hech qanday urinishisiz juda yaxshi
                suratga oladi. Endi shunchaki muvaffaqiyatsiz kadrlar bo‘lmaydi.
                Ekranning diagonali 6,79 dyuym va o‘lchamlari 2460x1080 piksel –
                beg‘ubor tasvirni tashkil etuvchi ideal birlik. 90 Gts
                yangilanish chastotasi dinamik sahnalar ravonligi va
                interfeysning tezkor javob qaytarishini ta’minlaydi. SGS Low
                Blue Light sertifikati qulay o‘qishni va foydalanuvchining
                ko‘zlari himoyasini kafolatlaydi. Xiaomi Redmi 12 mobil telefoni
                5000 mA/soat sig‘imli akkumulyator bilan jihozlangan bo‘lib, bu
                uni kun bo‘yi qayta quvvatlanmasdan ishlatish imkonini beradi.
                Shu bilan birga, standart 18 Vt qurilmaning ishlash muddatini
                tezda tiklaydi, bu faol hayot tarzi uchun qulay – tushlikdagi
                qahvani icha turib quvvatlashga ulgurasiz.
              </span>
            </div>
          </div>
        </div>

        <div className=" dynamic_text_menu">
          
            <h1>Mahsulot narxi</h1>

            <b>{product.price} so'm</b>

            <button className="dynamic_text_menu_toliq">Toliq tolov</button>

            <button  className="dynamic_text_menu_savat"  onClick={() => onAdd(product)}>Savatchaga qoshish</button>

            <button className="dynamic_text_menu_sot">Sotip olish</button>
          
        </div>
      </div>

      <div>
        <SwipProduct />
      </div>
    </div>
  );
}

export default Dynamicpage2;
