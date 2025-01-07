import frequentlyBoughtImg from "/images/frequntly-bought-course.png";

const FrequentlyBoughtTogether = () => {
  return (
    <div className="flex flex-col p-[1em] border border-[#d1d7dc]">
      <h2>FrequentlyBoughtTogether</h2>
      <div className="flex gap-[1em]">
        <img src={frequentlyBoughtImg} alt="" />
        <b>Electronics : Semiconductor - A thorough understanding</b>
        <p>Sumanta kumar Pal</p>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
