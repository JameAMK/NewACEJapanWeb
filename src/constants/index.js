const Img = Array(36).fill({ image: "/PartnersImg/image 1.png" });

export const PartnersImg = Img.map((_, index) => ({
  image: `/PartnersImg/image ${index + 1}.png`,
  delay: `0.${index}`,
}));

export const BusinessCardData = [
  {
    Businessimg: "businessImg/businessImg1.png",
    Businesstitle: "Digital Transformation Solution",
    text: "Read More",
    delay: 0.3,
  },
  {
    Businessimg: "businessImg/businessImg2.png",
    Businesstitle: "Smart City and Smart Transportation",
    delay: 0.4,
    text: "Read More",
  },
  {
    Businessimg: "businessImg/businessImg3.png",
    Businesstitle: "Sustainability Solutions",
    delay: 0.5,
    text: "Read More",
  },
];

export const ProgramCardData = [
  {
    ProgramImg: "ProgramImg/Image (3).png",
    Programtilte: "IT Training",
    text: "Read More",
  },
  {
    ProgramImg: "ProgramImg/Image (4).png",
    Programtilte: "Japanese Language Training",
    text: "Read More",
  },
  {
    ProgramImg: "ProgramImg/Image (5).png",
    Programtilte: "Human Resource Development",
    text: "Read More",
  },
  {
    ProgramImg: "ProgramImg/Image (6).png",
    Programtilte: "RISO Program",
    text: "Read More",
  },
];

export const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Service", path: "/service" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contactus" },
];

export const RemarkText = [
  {
    img: "correctIcon.svg",
    title: "10 Years Experience",
    text: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    delay: 0.2,
  },
  {
    img: "correctIcon.svg",
    title: "Excellencee Certificate",
    text: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    delay: 0.3,
  },
  {
    img: "correctIcon.svg",
    title: "Affordable Price",
    text: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
    delay: 0.4,
  },
];

export const DirectorsContent = [
  {
    img: "/AboutUsPageImg/Photo (1).png",
    name: "Mr. Hisayuki Kimata",
    text: "President",
  },
  {
    img: "/AboutUsPageImg/Photo (2).png",
    name: "Mr. Htun Tauk Zaw",
    text: "Vice President",
  },
  {
    img: "/AboutUsPageImg/Photo.png",
    name: "Mr. Zaw Moe Thant",
    text: "Executive Director",
  },
  {
    img: "/AboutUsPageImg/Photo (1).png",
    name: "Mr. Myo Lin Soe",
    text: "Executive Director",
  },
];
