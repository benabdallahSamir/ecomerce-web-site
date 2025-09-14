import ProductContainer from "./ProductContainer";

export default function TopWearsForWomen() {
    const products = [
        {
            id: 1,
            name: "Floral Print Blouse",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            price: 29.99,
        },
        {
            id: 2,
            name: "Denim Jacket",
            img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            price: 49.99,
        },
        {
            id: 3,
            name: "Striped T-Shirt",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            price: 19.99,
        },
        {
            id: 4,
            name: "White Cotton Shirt",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            price: 24.99,
        },
        {
            id: 5,
            name: "Black Crop Top",
            img: "https://images.unsplash.com/photo-1469398715555-76331a1cc6c6",
            price: 15.99,
        },
        {
            id: 6,
            name: "Red Tunic",
            img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
            price: 34.99,
        },
        {
            id: 7,
            name: "Sleeveless Tank",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            price: 12.99,
        },
        {
            id: 8,
            name: "Plaid Shirt",
            img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            price: 27.99,
        },
    ];
    return <ProductContainer text={"Top Wears For Women"} products={products} />;
}
