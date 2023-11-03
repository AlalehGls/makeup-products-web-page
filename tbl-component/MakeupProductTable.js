import TblBody from "./TblBody";
import TblHeader from "./TblHeader";

export default function MakeupProductsTable({
  categorizedProducts, 
  convertPrice
}) {
  return (
    <>
      <TblHeader />
      <TblBody
        categorizedProducts={categorizedProducts}
        convertPrice={convertPrice}
      />
    </>
  );
}
