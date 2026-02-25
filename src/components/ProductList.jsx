import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

const plantsArray = [
  {
    "id": 1,
    "name": "Aloe Vera",
    "cost": "$10",
    "image": "https://images.unsplash.com/photo-1587502537745-84a5f8c6c6a6?auto=format&fit=crop&w=800&q=80",
    "description": "Medicinal indoor plant",
    "category": "Medicinal"
  },
  {
    "id": 2,
    "name": "Tulsi (Holy Basil)",
    "cost": "$8",
    "image": "https://images.unsplash.com/photo-1622037022824-0c71d2c3c5c1?auto=format&fit=crop&w=800&q=80",
    "description": "Sacred medicinal plant",
    "category": "Medicinal"
  },
  {
    "id": 3,
    "name": "Snake Plant",
    "cost": "$15",
    "image": "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
    "description": "Low maintenance air purifier plant",
    "category": "Indoor"
  },
  {
    "id": 4,
    "name": "Peace Lily",
    "cost": "$18",
    "image": "https://images.unsplash.com/photo-1593691509543-c55fb32d2b6b?auto=format&fit=crop&w=800&q=80",
    "description": "Flowering indoor plant",
    "category": "Indoor"
  },
  {
    "id": 5,
    "name": "Money Plant",
    "cost": "$12",
    "image": "https://images.unsplash.com/photo-1603436326363-e5c8c8cbe5e6?auto=format&fit=crop&w=800&q=80",
    "description": "Popular decorative indoor plant",
    "category": "Indoor"
  },
  {
    "id": 6,
    "name": "Neem Plant",
    "cost": "$20",
    "image": "https://images.unsplash.com/photo-1622625847646-d7c7b3f4a6d4?auto=format&fit=crop&w=800&q=80",
    "description": "Medicinal plant with antibacterial properties",
    "category": "Medicinal"
  },
  {
    "id": 7,
    "name": "Areca Palm",
    "cost": "$25",
    "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    "description": "Indoor decorative palm plant",
    "category": "Indoor"
  },
  {
    "id": 8,
    "name": "Lavender",
    "cost": "$14",
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    "description": "Aromatic and calming plant",
    "category": "Aromatic"
  },
  {
    "id": 9,
    "name": "Jade Plant",
    "cost": "$16",
    "image": "https://images.unsplash.com/photo-1616509091215-bb2cfb5d7c10?auto=format&fit=crop&w=800&q=80",
    "description": "Lucky succulent indoor plant",
    "category": "Indoor"
  },
  {
    "id": 10,
    "name": "Mint",
    "cost": "$6",
    "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80",
    "description": "Fast-growing herbal plant",
    "category": "Herbal"
  }
]

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div className="card" key={plant.name}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;