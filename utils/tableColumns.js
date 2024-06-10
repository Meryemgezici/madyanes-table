// Stoklu cari ekstre tablosu sütunları
export const stockedAccountTableCol = [
  { key: "date", label: "Tarih" },
  { key: "transactionType", label: "İşlem Türü" },
  { key: "description1", label: "Açıklama 1" },
  { key: "dueDate", label: "Vadesi" },
  { key: "productCode", label: "Kodu" },
  { key: "productType", label: "Cinsi" },
  { key: "quantity", label: "Miktar" },
  { key: "price", label: "Fiyat" },
  { key: "debit", label: "Borç" },
  { key: "credit", label: "Alacak" },
  { key: "balance", label: "Bakiye" },
];
// Cari ekstre tablosu sütunları
export const accountTableCol = [
  { key: "date", label: "Tarih", responsiveClass: "" },
  { key: "transactionType", label: "İşlem Türü", responsiveClass: "" },
  { key: "dueDate", label: "Vadesi", responsiveClass: "" },
  { key: "description1", label: "Açıklama 1", responsiveClass: "  md:hidden  sm:hidden hidden lg:table-cell" },
  { key: "description", label: "Açıklama", responsiveClass: "hidden lg:table-cell" },
  { key: "debit", label: "Borç", responsiveClass: "hidden md:table-cell" },
  { key: "credit", label: "Alacak", responsiveClass: "hidden md:table-cell " },
  { key: "balance", label: "Bakiye", responsiveClass: "hidden md:table-cell" },
];