export default function Page() {
  return (
    <div>
      <h1>Test Page - Working!</h1>
      <p>If you can see this, the server is working!</p>
      <p>Deployed at: {new Date().toLocaleString()}</p>
    </div>
  )
}
