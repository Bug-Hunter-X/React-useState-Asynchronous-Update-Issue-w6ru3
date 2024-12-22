```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect ran!');
  }, []); // Empty dependency array means this runs only once

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    // Problem: Directly accessing count here will not reflect the updated value
    console.log('Count after increment:', count); 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```