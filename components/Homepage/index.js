"use client";
import Link from "next/link";
import Image from "next/image";
import pathImg from "./../../public/assets/images/medyanes.png";

export default function Homepage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-MidnightBlue via-DarkTeal to-TealishBlue">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto">
        <div className="relative w-full h-96 md:w-2/5 md:h-auto">
          <Image
            src={pathImg}
            alt="Medyanes"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="w-full md:w-3/5 p-8">
          <h1 className="text-3xl font-bold text-DarkGray mb-4">
            Cari Component – Medyanes 360 Hoş Geldiniz
          </h1>
          <p className="text-SlateGray mb-8">
            Web uygulamamızda, müşteri cari kayıtlarını görüntüleyebileceğiniz
            iki farklı bileşen sunuyoruz. Cari Ekstre ve Stoklu Cari Ekstre
            bileşenlerimizle, müşteri hesap hareketlerinizi kolayca takip
            edebilir ve yönetebilirsiniz. Bu bileşenlerin her biri, dinamik
            olarak oluşturulan verilerle zenginleştirilmiş ve kullanıcı dostu
            bir arayüzle tasarlanmıştır.Cari Ekstre bileşenimiz,
            müşterilerinizin cari hareketlerini basit ve anlaşılır bir şekilde
            görüntülemenizi sağlar.Stoklu Cari Ekstre bileşenimiz, cari
            ekstresine ek olarak stok bilgilerini de içerir. Bu bileşenle, stok
            hareketlerinizi detaylı bir şekilde takip edebilirsiniz.Aşağıdaki
            butonları kullanarak, ihtiyacınıza uygun bileşeni seçebilir ve
            detaylı bilgilere ulaşabilirsiniz{" "}
          </p>
          <div className="flex space-x-4">
            <Link
              href="/account"
              className="bg-TealishBlue hover:bg-MidnightBlue text-white font-bold py-2 px-4 rounded"
            >
              Cari Ekstre
            </Link>
            <Link
              href="/stockedAccount"
              className="bg-DarkTeal hover:bg-MidnightBlue text-white font-bold py-2 px-4 rounded"
            >
              Stoklu Cari Ekstre
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
