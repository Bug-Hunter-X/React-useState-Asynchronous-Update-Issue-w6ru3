```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Updated Count:', count);
  }, [count]); // This effect runs only when the count changes

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```