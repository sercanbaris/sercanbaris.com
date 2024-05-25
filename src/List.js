const products = [
    { title: 'Lahana', isFruit: false, id: 1 },
    { title: 'Sarımsak', isFruit: false, id: 2 },
    { title: 'Elma', isFruit: true, id: 3 },
];



export default function List() {
    const listItems = products.map((product) => (
        <li 
        key={product.id}
        style={{
            color: product.isFruit ? 'green' : 'orange',
        
        }}
        >
          {product.title}
        </li>
        ));
  return (

    <>
        <ul>{listItems}</ul>
    </>
  );
}