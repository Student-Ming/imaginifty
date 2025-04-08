export const BallLoading = () => {

  return (
    <div className="white-black-Loading">
      {[...Array(36)].map((_, i) => (
        <div key={i} className="dot"></div>
      ))}
    </div>
  )
}