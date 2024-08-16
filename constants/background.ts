export const images: string[] = ["/images/Home/mart1.1.jpg", "/images/Home/mart2.webp", "/images/Home/mart3.webp", "/images/Home/mart4.webp", "/images/Home/mart5.webp"];

export const getNextImageIndex = (currentIndex: number, length: number): number => {
  return currentIndex === length - 1 ? 0 : currentIndex + 1;
};
