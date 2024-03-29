
const Cart = ({cart,totalRemaining,totalCredit,totalPrice}) => {
  let count = 1;
  
  return (
    <div className="w-80 h-[500px] bg-white rounded-xl p-6">
      <h3 className="text-[#2F80ED] text-lg font-bold" >Credit Hour Remaining {totalRemaining} hr </h3>
      <hr />
        <h2 className="font-bold text-xl pt-5 pb-2" >Course Name </h2>
       <ol>
       {
          cart.map(title => 
            <li className="text-[#1c1b1b99]"> {count++} {title.title} </li>
            )
        }
       </ol>
        <hr/>
        <div>
          <h4 className="pt-4 pb-4">Total Credit Hour : {totalCredit} </h4> <hr />
          <p className="pt-4 font-semibold " >Total Price : {totalPrice} USD</p>

        </div>

    </div>
  );
};

export default Cart