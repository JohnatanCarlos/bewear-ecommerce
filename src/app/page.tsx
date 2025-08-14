import Header from "@/components/commons/header";
import ProductList from "@/components/commons/product-list";
import { db } from "@/db";
import Image from "next/image"

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true
    }
  });
 
  return (
    <>
      <Header></Header>

      <div className="space-y-6 px-5">
        <Image 
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full "
        />

        <ProductList products={products} title="Mais vendidos" />

        <Image 
          src="/banner-02.png"
          alt="Leve uma vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full "
        />

      </div>
    </>
  );
}

export default Home;
