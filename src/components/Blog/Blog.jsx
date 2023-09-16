
const Blog = ({blog,handleAddToCart}) => {
    const{title,cover,detail,price,hour} = blog;

  return (
    <div>
        <div className="border bg-white rounded-xl w-80 p-4 mb-3">
       <img className="pl-[2px] pb-3" src={cover} alt={`cover pic of the title ${title}`} />
        <h2 className="text-lg font-semibold pb-3">{title}</h2>
        <p className="text-sm text-[#1c1b1b99] mb-5">{detail}</p>
        <div className="flex justify-between">
            <div className="text-base text-[#1c1b1b99] font-medium">
             Price:{price}
            </div>
            <div className="text-base text-[#1c1b1b99] font-medium" >
            Credit : {hour}hr
            </div>
        </div>
        <button onClick={() => handleAddToCart(blog)}  className='bg-[#2F80ED] rounded-lg text-center  text-white w-full h-10 mt-4' type="submit">Select</button>
       </div>
    </div>
  );
};

export default Blog